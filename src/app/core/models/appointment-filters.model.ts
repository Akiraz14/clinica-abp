import { AppointmentStatus } from "@core/enums/appointment-status.enum";

export interface AppointmentFilters {
  search?: string;
  status?: AppointmentStatus | 'all';
  doctorId?: string;
  date?: string;
}
