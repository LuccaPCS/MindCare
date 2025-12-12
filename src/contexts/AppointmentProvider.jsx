function AppointmentProvider({ children }) {
  return (
    <AppointmentContext.Provider value={{}}>
      {children}
    </AppointmentContext.Provider>
  );
}

export default AppointmentProvider;
