import { createContext } from "react";

const UserContext = createContext({
  user: {
    profile: null,
    id: null,
    name: null,
    email: null,
    password: null,
    specialty: [],
    experience: null,
    introduction: null,
    preferences: null,
  },
  setUser: () => {},
  authenticatedUser: null,
  setAuthenticatedUser: () => {},
  usersList: [],
  filteredUsersList: [],
  setUsersList: () => {},
  editUser: () => {},
  isLoading: false,
  error: null,
  selectedUser: null,
  selectedDetails: null,
  handleSelectUser: () => {},
});

export default UserContext;
