import Navbar from "../features/Navbar/navbar.jsx";
import ProCard from "../features/Card/pro-card.jsx";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext.jsx";

export default function ClientDashboardPage() {
  const {
    error,
    usersList,
    isLoading,
    filteredUsersList,
    filterUsersList,
    handleSelectUser,
    selectedUser,
    selectedDetails,
  } = useContext(UserContext);

  useEffect(() => {
    if (filteredUsersList.length === 0 && usersList.length > 0) {
      filterUsersList("pro");
    }
  }, [filterUsersList, usersList, filteredUsersList]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar visibleLinks={["Login", "Profile"]} />
      <h2 style={{ padding: "1rem" }}>Dashboard do Cliente</h2>
      <h3
        style={{
          padding: "0 0 1rem 1rem",
          fontSize: "1.3rem",
          color: "var(--main-green-dark)",
        }}
      >
        Psicólogos disponíveis
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          padding: "0 0 1rem 1rem",
        }}
      >
        {console.log("Filtered Users List:", filteredUsersList)}
        {filteredUsersList.map((psychologist) => (
          <ProCard
            key={psychologist.id}
            psychologist={psychologist}
            handleClick={handleSelectUser}
            isSelected={selectedUser === psychologist.id}
            details={selectedUser === psychologist.id ? selectedDetails : null}
          />
        ))}
      </div>
      <h3
        style={{
          padding: "0 0 1rem 1rem",
          fontSize: "1.3rem",
          color: "var(--main-green-dark)",
        }}
      >
        Minhas consultas
      </h3>
    </>
  );
}
