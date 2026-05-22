import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { AppointmentApi } from '../../services/appointment-api';
import { AppointmentForm } from '@features/appointments/components/appointment-form/appointment-form';
import { Appointment } from '@core/models/appointment.model';
import { AppointmentStatus } from '@core/enums/appointment-status.enum';
import { DatePipe } from '@angular/common';
import { AppointmentType } from '@core/enums/appointment-type.enum';

@Component({
  selector: 'app-appointment-list',
  imports: [
    RouterLink, FormsModule,
    TableModule, ButtonModule, InputTextModule, SelectButtonModule,
    TagModule, TooltipModule, DialogModule, AvatarModule, SelectModule,
    AppointmentForm, DatePipe,
  ],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss',
})
export class AppointmentList {
  private appointmentApi = inject(AppointmentApi);
  readonly AppointmentType = AppointmentType;
  
  // ─────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────

  appointments = this.appointmentApi.filteredAppointments;
  loading = this.appointmentApi.loading;
  pendingAppointmentsCount = this.appointmentApi.pendingAppointmentsCount;
  showFormDialog = signal(false);
  appointmentToEdit = signal<Appointment | null>(null);

  // ─────────────────────────────────────────────
  // Filters
  // ─────────────────────────────────────────────

  search = '';

  activeStatusFilter: AppointmentStatus | 'all' = 'all';

  selectedDoctorId = '';

  // ─────────────────────────────────────────────
  // Filter Options
  // ─────────────────────────────────────────────

  readonly statusFilterOptions: {
    label: string;
    value: AppointmentStatus | 'all';
  }[] = [
    { label: 'Todas', value: 'all' },
    { label: 'Confirmadas', value: AppointmentStatus.Confirmed },
    { label: 'Pendientes', value: AppointmentStatus.Pending },
    { label: 'Canceladas', value: AppointmentStatus.Cancelled },
    { label: 'Realizadas', value: AppointmentStatus.Completed },
    { label: 'No asistió', value: AppointmentStatus.NoShow }
  ];

  readonly doctorOptions = [
    { label: 'Todos los médicos', value: '' },
    { label: 'Dr. Morales',       value: 'M-01' },
    { label: 'Dra. Torres',       value: 'M-02' },
    { label: 'Dr. Ramírez',       value: 'M-03' },
  ];

  // ─────────────────────────────────────────────
  // UI Maps
  // ─────────────────────────────────────────────

  readonly severityMap: Record<
    AppointmentStatus,
    'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast'
  > = {
    [AppointmentStatus.Confirmed]: 'success',
    [AppointmentStatus.Pending]: 'warn',
    [AppointmentStatus.Cancelled]: 'danger',
    [AppointmentStatus.Completed]: 'info',
    [AppointmentStatus.NoShow]: 'secondary'
  };

  // ─────────────────────────────────────────────
  // Filters
  // ─────────────────────────────────────────────

  onSearch(): void {
    this.appointmentApi.updateFilters({ search: this.search });
  }

  onStatusFilterChange(status: AppointmentStatus | 'all'): void {
    this.activeStatusFilter = status;
    this.appointmentApi.updateFilters({ status });
  }

  onDoctorFilterChange(): void {
    this.appointmentApi.updateFilters({
      doctorId: this.selectedDoctorId
    });
  }

  // ─────────────────────────────────────────────
  // Actions
  // ─────────────────────────────────────────────

  openCreateDialog(): void {
    this.appointmentToEdit.set(null);
    this.showFormDialog.set(true);
  }

  edit(
    appointment: Appointment
  ): void {
    this.appointmentToEdit.set(appointment);
    this.showFormDialog.set(true);
  }

  cancel(id: string): void {
    this.appointmentApi.cancel(id);
  }

  onFormSaved(): void {
    this.showFormDialog.set(false);
  }


  // ─────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────

  getSeverity(status: AppointmentStatus) {
    return this.severityMap[status];
}

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  getAvatarColor(name: string): string {
    const colors = [
      '#e0f2fe',
      '#dcfce7',
      '#fef9c3',
      '#fce7f3',
      '#ede9fe',
      '#ccfbf1'
    ];

    return colors[
      name.charCodeAt(0) % colors.length
    ];
  }
}
