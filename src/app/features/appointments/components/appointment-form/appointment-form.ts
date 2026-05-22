import { Component, computed, inject, input, output, signal } from '@angular/core';
import { DatePipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { AppointmentType } from '@core/enums/appointment-type.enum';
import { Appointment } from '@core/models/appointment.model';
import { TimeSlot } from '@core/models/time-slot.model';
import { AppointmentApi } from '@features/appointments/services/appointment-api';
import { AppointmentStatus } from '@core/enums/appointment-status.enum';

@Component({
  selector: 'app-appointment-form',
  imports: [
    FormsModule, ButtonModule, InputTextModule, SelectModule,
    DatePickerModule, TextareaModule, DatePipe, SlicePipe,
  ],
  templateUrl: './appointment-form.html',
  styleUrl: './appointment-form.scss',
})
export class AppointmentForm {
  private readonly appointmentApi = inject(AppointmentApi);

  get today() { return new Date(); }
  
  // ─────────────────────────────────────────────
  // Inputs / Outputs
  // ─────────────────────────────────────────────

  readonly appointmentToEdit = input<Appointment | null>(null);
  readonly saved = output<void>();
  readonly cancelled = output<void>();

  // ─────────────────────────────────────────────
  // Stepper
  // ─────────────────────────────────────────────

  readonly currentStep = signal(0);

  get step() { return this.currentStep(); }

  readonly steps = [
    { label: 'Paciente', icon: 'pi pi-user' },
    { label: 'Médico y Fecha', icon: 'pi pi-calendar' },
    { label: 'Confirmar', icon: 'pi pi-check' },
  ];

  // ─────────────────────────────────────────────
  // Form State
  // ─────────────────────────────────────────────

  form = signal({
    patientId: '',    patientName: '',
    doctorId: '',      doctorName: '',
    specialty: '',  date: new Date(),
    startTime: '',    durationMinutes: 45,
    type: AppointmentType.InPerson as AppointmentType,
    office: '',   reason: '',
  });

  // ─────────────────────────────────────────────
  // Computed
  // ─────────────────────────────────────────────

  readonly availableSlots = computed<TimeSlot[]>(() => {
    const form = this.form();
    if (!form.doctorId || !form.date) return [];
    return this.appointmentApi.getAvailableSlots(
      form.doctorId,
      form.date.toISOString().split('T')[0]
    );
  });

  slots = computed<TimeSlot[]>(() => {
    const f = this.form();
    if (!f.doctorId || !f.date) return [];
    return this.appointmentApi.getAvailableSlots(f.doctorId, f.date.toISOString().split('T')[0]);
  });

  // ─────────────────────────────────────────────
  // Catalogs
  // ─────────────────────────────────────────────

  readonly specialties = [
    { label: 'Cardiología',      value: 'Cardiología' },
    { label: 'Neurología',       value: 'Neurología' },
    { label: 'Medicina General', value: 'Medicina General' },
    { label: 'Dermatología',     value: 'Dermatología' },
    { label: 'Pediatría',        value: 'Pediatría' },
  ];

  readonly doctors = [
    { label: 'Dr. Carlos Morales', value: 'M-01', name: 'Dr. Carlos Morales' },
    { label: 'Dra. Ana Torres',    value: 'M-02', name: 'Dra. Ana Torres' },
    { label: 'Dr. Luis Ramírez',   value: 'M-03', name: 'Dr. Luis Ramírez' },
  ];

  readonly appointmentTypes = [
    { label: 'Presencial',   value: AppointmentType.InPerson },
    { label: 'Telemedicina', value: AppointmentType.Telemedicine },
    { label: 'Seguimiento',  value: AppointmentType.FollowUp },
  ];

  readonly durations = [
    { label: '20 minutos', value: 20 },
    { label: '30 minutos', value: 30 },
    { label: '45 minutos', value: 45 },
    { label: '60 minutos', value: 60 },
  ];

  // ─────────────────────────────────────────────
  // Navigation
  // ─────────────────────────────────────────────

  nextStep(): void {
    if (this.currentStep() >= 2) return;
    this.currentStep.update(step => step + 1);
  }

  previousStep(): void {
    if (this.currentStep() <= 0) return;
    this.currentStep.update(step => step - 1);
  }


  // ─────────────────────────────────────────────
  // Events
  // ─────────────────────────────────────────────

  onDoctorChange(doctorId: string): void {
    const doctor = this.doctors.find(
      item => item.value === doctorId
    );

    this.form.update(current => ({
      ...current,
      doctorId,
      doctorName: doctor?.name ?? ''
    }));
  }

  selectSlot(slot: TimeSlot): void {
    if (!slot.available) return;
    this.form.update(current => ({
      ...current,
      startTime: slot.time
    }));
  }

  save(): void {
    const form = this.form();

    this.appointmentApi.create({
      patientId: form.patientId || 'P-TEMP',
      patientName: form.patientName || 'Paciente nuevo',
      patientNumber: '#P-TEMP',
      doctorId: form.doctorId,
      doctorName: form.doctorName,
      specialty: form.specialty,
      date: form.date.toISOString().split('T')[0],
      startTime: form.startTime,
      endTime: form.startTime,
      durationMinutes: form.durationMinutes,
      type: form.type,
      status: AppointmentStatus.Pending,
      office: form.office,
      reason: form.reason
    });

    this.saved.emit();
  }
}
