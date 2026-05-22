import { AppointmentStatus } from "@core/enums/appointment-status.enum";
import { AppointmentType } from "@core/enums/appointment-type.enum";

export interface Appointment {
  id: string;

  patientId: string;
  patientName: string;
  patientNumber: string;

  doctorId: string;
  doctorName: string;

  specialty: string;

  date: string;
  startTime: string;
  endTime: string;

  durationMinutes: number;

  type: AppointmentType;
  status: AppointmentStatus;

  office?: string;
  reason?: string;
  notes?: string;
}
