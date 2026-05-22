import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Appointment } from '@core/models/appointment.model';
import { AppointmentFilters } from '@core/models/appointment-filters.model';
import { AppointmentStatus } from '@core/enums/appointment-status.enum';
import { TimeSlot } from '@core/models/time-slot.model';
import { APPOINTMENTS_MOCK, SLOTS_BASE } from '@core/mock/appointments.mock';

@Injectable({ providedIn: 'root' })
export class AppointmentApi {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/appointments`;

  // ─────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────
  
  appointments        = signal<Appointment[]>(APPOINTMENTS_MOCK);
  loading     = signal(false);
  selectedAppointment = signal<Appointment | null>(null);
  filters       = signal<AppointmentFilters>({ status: 'all' });

  // ─────────────────────────────────────────────
  // Computed
  // ─────────────────────────────────────────────

  readonly filteredAppointments = computed(() => {
    const filters = this.filters();
    return this.appointments().filter(appointment => {
      const matchesSearch =
        !filters.search ||
        appointment.patientName
          .toLowerCase()
          .includes(filters.search.toLowerCase()) ||
        appointment.doctorName
          .toLowerCase()
          .includes(filters.search.toLowerCase());

      const matchesStatus =
        !filters.status ||
        filters.status === 'all' ||
        appointment.status === filters.status;

      const matchesDoctor =
        !filters.doctorId ||
        appointment.doctorId === filters.doctorId;

      const matchesDate =
        !filters.date ||
        appointment.date === filters.date;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDoctor &&
        matchesDate
      );
    });
  });

  readonly todayAppointments = computed(() => {
    const today = new Date().toISOString().split('T')[0];

    return this.appointments().filter(
      appointment => appointment.date === today
    );
  });

  readonly pendingAppointmentsCount = computed(() =>
    this.appointments().filter(
      appointment => appointment.status === AppointmentStatus.Pending
    ).length
  );

  // ─────────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────────

  select(appointment: Appointment): void {
    this.selectedAppointment.set(appointment);
  }

  updateFilters(partialFilters: Partial<AppointmentFilters>): void {
    this.filters.update(current => ({
      ...current,
      ...partialFilters
    }));
  }

  getAvailableSlots(
    doctorId: string,
    date: string
  ): TimeSlot[] {

    const occupiedSlots = this.appointments()
      .filter(appointment =>
        appointment.doctorId === doctorId &&
        appointment.date === date &&
        appointment.status !== AppointmentStatus.Cancelled
      )
      .map(appointment => appointment.startTime);

    return SLOTS_BASE.map(time => ({
      time,
      available: !occupiedSlots.includes(time)
    }));
  }

  create(
    appointment: Omit<Appointment, 'id'>
  ): void {

    const newAppointment: Appointment = {
      ...appointment,
      id: `APT-${Date.now()}`
    };

    this.appointments.update(current => [
      newAppointment,
      ...current
    ]);
  }

  update(
    id: string,
    changes: Partial<Appointment>
  ): void {

    this.appointments.update(current =>
      current.map(appointment =>
        appointment.id === id
          ? { ...appointment, ...changes }
          : appointment
      )
    );
  }

  cancel(id: string): void {
    this.update(id, {
      status: AppointmentStatus.Cancelled
    });
  }
}
