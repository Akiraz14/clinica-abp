import { AppointmentStatus } from '@core/enums/appointment-status.enum';
import { AppointmentType } from '@core/enums/appointment-type.enum';
import { Appointment } from "@core/models/appointment.model";

const HOY = new Date().toISOString().split('T')[0];

export const APPOINTMENTS_MOCK: Appointment[] = [
  { id:'C-2041', patientId:'P-0041', patientName:'Ana García',    patientNumber:'#P-0041', doctorId:'M-01', doctorName:'Dr. Morales', specialty:'Cardiología',      date:HOY, startTime:'09:00', endTime:'09:45', durationMinutes:45, type:AppointmentType.InPerson,     status:AppointmentStatus.Confirmed, office:'Consultorio 3 – Piso 2', reason:'Dolor en el pecho al esfuerzo' },
  { id:'C-2042', patientId:'P-0078', patientName:'Luis Herrera',  patientNumber:'#P-0078', doctorId:'M-02', doctorName:'Dra. Torres', specialty:'Neurología',       date:HOY, startTime:'09:30', endTime:'10:00', durationMinutes:30, type:AppointmentType.Telemedicine, status:AppointmentStatus.Pending,   office:'Online',                 reason:'Migraña recurrente' },
  { id:'C-2043', patientId:'P-0112', patientName:'Marta López',   patientNumber:'#P-0112', doctorId:'M-03', doctorName:'Dr. Ramírez', specialty:'Medicina General', date:HOY, startTime:'10:15', endTime:'10:35', durationMinutes:20, type:AppointmentType.InPerson,     status:AppointmentStatus.Confirmed, office:'Consultorio 1 – Piso 1', reason:'Control general' },
  { id:'C-2044', patientId:'P-0059', patientName:'Pedro Díaz',    patientNumber:'#P-0059', doctorId:'M-01', doctorName:'Dr. Morales', specialty:'Cardiología',      date:HOY, startTime:'11:00', endTime:'12:00', durationMinutes:60, type:AppointmentType.InPerson,     status:AppointmentStatus.Cancelled, office:'Consultorio 3 – Piso 2', reason:'Revisión post-cirugía' },
  { id:'C-2045', patientId:'P-0203', patientName:'Sofía Ruiz',    patientNumber:'#P-0203', doctorId:'M-02', doctorName:'Dra. Torres', specialty:'Dermatología',     date:HOY, startTime:'11:45', endTime:'12:15', durationMinutes:30, type:AppointmentType.FollowUp,     status:AppointmentStatus.Confirmed, office:'Consultorio 5 – Piso 1', reason:'Seguimiento tratamiento' },
  { id:'C-2046', patientId:'P-0041', patientName:'Ana García',    patientNumber:'#P-0041', doctorId:'M-01', doctorName:'Dr. Morales', specialty:'Cardiología',      date:HOY, startTime:'14:00', endTime:'15:00', durationMinutes:60, type:AppointmentType.InPerson,     status:AppointmentStatus.Pending,   office:'Consultorio 3 – Piso 2', reason:'Resultado ecocardiograma' },
];

export const SLOTS_BASE = ['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30','16:00','16:30'];
