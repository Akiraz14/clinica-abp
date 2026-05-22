import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { AppointmentApi } from '@features/appointments/services/appointment-api';
import { Appointment } from '@core/models/appointment.model';
import { AppointmentStatus } from '@core/enums/appointment-status.enum';

export enum CalendarView {
  Day = 'day',
  Week = 'week',
  Month = 'month'
}

@Component({
  selector: 'app-calendar',
  imports: [
    FormsModule, ButtonModule, SelectButtonModule, TooltipModule,
    TitleCasePipe, DatePipe, UpperCasePipe,
  ],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  private readonly appointmentApi = inject(AppointmentApi);

  // ─────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────

  readonly view = signal<CalendarView>(CalendarView.Week);
  readonly currentDate = signal(new Date());

  // ─────────────────────────────────────────────
  // View Options
  // ─────────────────────────────────────────────

  readonly viewOptions = [
    { label: 'Día', value: CalendarView.Day },
    { label: 'Semana', value: CalendarView.Week },
    { label: 'Mes', value: CalendarView.Month }
  ];

  // ─────────────────────────────────────────────
  // Constants
  // ─────────────────────────────────────────────

  readonly HOURS = [
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00'
  ];

  readonly DOCTOR_COLORS: Partial<Record<string, string>> = {
    'M-01': '#bae6fd',
    'M-02': '#ddd6fe',
    'M-03': '#bbf7d0'
  };

  // ─────────────────────────────────────────────
  // Computed
  // ─────────────────────────────────────────────

  readonly weekDays = computed(() => {
    const baseDate = this.currentDate();
    const monday = new Date(baseDate);
    monday.setDate(baseDate.getDate() - baseDate.getDay() + 1);

    return Array.from({ length: 5 }, (_, index) => {
        const date = new Date(monday);
        date.setDate(monday.getDate() + index);
        return date;
      }
    );
  });

  readonly monthTitle = computed(() =>
    this.currentDate().toLocaleDateString(
      'es',
      {
        month: 'long',
        year: 'numeric'
      }
    )
  );

  // ─────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────

  getAppointmentsByCell(
    day: Date,
    hour: string
  ): Appointment[] {

    const date = day
      .toISOString()
      .split('T')[0];

    return this.appointmentApi
      .appointments()
      .filter(appointment =>
        appointment.date === date &&
        appointment.startTime === hour &&
        appointment.status !== AppointmentStatus.Cancelled
      );
  }

  isToday(day: Date): boolean {
    return (
      day.toDateString() ===
      new Date().toDateString()
    );
  }

  // ─────────────────────────────────────────────
  // Navigation
  // ─────────────────────────────────────────────

  previous(): void {
    const date = new Date(this.currentDate());
    date.setDate(date.getDate() - 7);
    this.currentDate.set(date);
  }

  next(): void {
    const date = new Date(this.currentDate());
    date.setDate(date.getDate() + 7);
    this.currentDate.set(date);
  }

  goToToday(): void {
    this.currentDate.set(new Date());
  }
}
