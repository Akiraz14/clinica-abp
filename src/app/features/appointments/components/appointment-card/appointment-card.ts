import { Component, input, output } from '@angular/core';
import { DatePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Appointment } from '@core/models/appointment.model';
import { AppointmentStatus } from '@core/enums/appointment-status.enum';
import { AppointmentType } from '@core/enums/appointment-type.enum';

@Component({
  selector: 'app-appointment-card',
  imports: [
    RouterLink, TagModule, ButtonModule, TooltipModule,
    SlicePipe, DatePipe, TitleCasePipe,
  ],
  templateUrl: './appointment-card.html',
  styleUrl: './appointment-card.scss',
})
export class AppointmentCard {
  readonly AppointmentType = AppointmentType;

  // ─────────────────────────────────────────────
  // Inputs / Outputs
  // ─────────────────────────────────────────────

  appointment = input.required<Appointment>();
  detailsViewed = output<Appointment>();
  edited = output<Appointment>();
  
  // ─────────────────────────────────────────────
  // UI Config
  // ─────────────────────────────────────────────

  readonly accentColors: Record<AppointmentStatus, string> = {
    [AppointmentStatus.Confirmed]: '#22c55e',
    [AppointmentStatus.Pending]: '#f59e0b',
    [AppointmentStatus.Cancelled]: '#e11d48',
    [AppointmentStatus.Completed]: '#0ea5e9',
    [AppointmentStatus.NoShow]: '#a855f7'
  };
  
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
  // Helpers
  // ─────────────────────────────────────────────

  getSeverity(status: AppointmentStatus) {
    return this.severityMap[status];
  }
}
