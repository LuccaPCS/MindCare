import { createContext } from "react";

const AppointmentContext = createContext({
  appointment: {
    id: null,
    proId: null,
    clientId: null,
    date: null,
    time: null,
    description: null,
    status: null,
  },
  appointmentsList: [],
  setAppointments: () => {},
  addAppointment: () => {},
  removeAppointment: () => {},
  editAppointment: () => {},
});

export default AppointmentContext;
