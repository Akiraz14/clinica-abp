import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe, SlicePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { AppPaths } from '@core/constants/app-paths';
import { AppointmentStatus } from '@core/enums/appointment-status.enum';
import { Appointment } from '@core/models/appointment.model';
import { AppointmentForm } from '@features/appointments/components/appointment-form/appointment-form';
import { AppointmentApi } from '@features/appointments/services/appointment-api';

interface TimelineEvent {
  label: string;
  date: string;
  icon: string;
  state: 'done' | 'active' | 'pending';
}

@Component({
  selector: 'app-appointment-detail',
  imports: [
    RouterLink, ButtonModule, TagModule, CardModule, DividerModule,
    TimelineModule, DialogModule, ConfirmDialogModule, AppointmentForm,
    DatePipe, SlicePipe,
  ],
  templateUrl: './appointment-detail.html',
  styleUrl: './appointment-detail.scss',
})
export class AppointmentDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly appointmentApi = inject(AppointmentApi);
  private readonly confirmationService = inject(ConfirmationService);

  readonly paths = AppPaths;
  
  readonly showEditDialog = signal(false);

  readonly appointment = computed<Appointment | undefined>(() => {
      const id = this.route.snapshot.paramMap.get('id');
      return this.appointmentApi
        .appointments()
        .find(
          appointment => appointment.id === id
        );
    });

  readonly timelineEvents: TimelineEvent[] = [
    {
      label: 'Cita agendada',
      date: 'May 5, 2026 · 14:32',
      icon: 'pi pi-calendar-plus',
      state: 'done'
    },
    {
      label: 'Recordatorio enviado',
      date: 'May 7, 2026 · 08:00',
      icon: 'pi pi-bell',
      state: 'done'
    },
    {
      label: 'Paciente en sala espera',
      date: 'Hoy · En curso',
      icon: 'pi pi-clock',
      state: 'active'
    },
    {
      label: 'Consulta realizada',
      date: 'Pendiente',
      icon: 'pi pi-check-circle',
      state: 'pending'
    }
  ];

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

  readonly AppointmentStatus = AppointmentStatus;

  getSeverity(status: AppointmentStatus) {
    return this.severityMap[status];
  }

  startAppointment(): void {
    const appointment =
      this.appointment();
    if (!appointment) return;
    this.appointmentApi
      .update(
        appointment.id,
        { status: AppointmentStatus.Completed }
      );
  }

  confirmCancellation(): void {
    this.confirmationService.confirm({
      message: '¿Seguro que deseas cancelar esta cita?',
      header: 'Cancelar cita',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí, cancelar',
      rejectLabel: 'No',
      accept: () => {
        const appointment = this.appointment();
        if (!appointment) return;
        this.appointmentApi.cancel(appointment.id);
        this.router.navigate([this.paths.appointments.list]);
      }
    });
  }

  goBack(): void {
    this.router.navigate([this.paths.appointments.list]);
  }
}
