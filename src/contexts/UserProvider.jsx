import { useEffect, useReducer, useMemo, useCallback } from "react";
import UserContext from "../contexts/UserContext";

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return { ...state, user: payload };
    case "SET_USERS_LIST":
      return { ...state, usersList: payload };
    case "FILTER_USERS_LIST":
      return {
        ...state,
        filteredUsersList: payload,
      };
    case "SET_AUTHENTICATED_USER":
      return { ...state, authenticatedUser: payload };
    case "SET_LOADING":
      return { ...state, isLoading: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: payload };
    case "SET_SELECTED_DETAILS":
      return { ...state, selectedDetails: payload };
    default:
      return state;
  }
};

function UserProvider({ children }) {
  const initialState = {
    user: {
      profile: null,
      id: null,
      name: null,
      email: null,
      password: null,
      specialty: null,
      experience: null,
      introduction: null,
      preferences: null,
    },
    usersList: [],
    filteredUsersList: [],
    authenticatedUser: null,
    isLoading: false,
    error: null,
    selectedUser: null,
    selectedDetails: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleSelectUser = useCallback(
    async (id) => {
      if (state.selectedUser === id) {
        dispatch({ type: "SET_SELECTED_USER", payload: null });
        dispatch({ type: "SET_SELECTED_DETAILS", payload: null });
        return;
      }

      dispatch({ type: "SET_SELECTED_USER", payload: id });
      dispatch({ type: "SET_SELECTED_DETAILS", payload: null });

      try {
        const res = await fetch(`/users/${id}.json`);
        if (!res.ok) throw new Error("Não foi possível carregar detalhes.");
        const data = await res.json();
        dispatch({ type: "SET_SELECTED_DETAILS", payload: data });
      } catch {
        dispatch({ type: "SET_SELECTED_DETAILS", payload: null });
      }
    },
    [state.selectedUser]
  );

  useEffect(() => {
    async function fetchUsers() {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });
      try {
        const response = await fetch("/users-list/users.json");
        if (!response.ok) {
          throw new Error("Falha ao carregar a lista de usuários.");
        }
        const data = await response.json();
        console.log("Dados carregados:", data);
        dispatch({ type: "SET_USERS_LIST", payload: data });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    }
    fetchUsers();
  }, []);

  const contextValue = useMemo(
    () => ({
      ...state,
      setUser: (user) => dispatch({ type: "SET_USER", payload: user }),
      setUsersList: (list) =>
        dispatch({ type: "SET_USERS_LIST", payload: list }),
      filterUsersList: (profile) => {
        console.log("Chamando filterUsersList com profile:", profile);
        console.log("usersList atual:", state.usersList);
        const filtered = state.usersList.filter(
          (user) => user.profile === profile
        );
        console.log("Resultado do filtro:", filtered);
        dispatch({ type: "FILTER_USERS_LIST", payload: filtered });
      },
      setAuthenticatedUser: (user) => {
        dispatch({ type: "SET_AUTHENTICATED_USER", payload: user });
      },
      setLoading: (loading) =>
        dispatch({ type: "SET_LOADING", payload: loading }),
      setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
      handleSelectUser,
    }),
    [state, handleSelectUser]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
