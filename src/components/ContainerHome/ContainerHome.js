import React, { useEffect } from "react";
import { useGlobalState } from "../../state/useGlobalState";
import { getToken } from "../../services/questionsService";
import { Header, TableContainer } from "../../components";

const ContainerHome = () => {
  const [{token},dispatch] = useGlobalState();
  useEffect(() => {
    getToken()
      .then(token => dispatch({ type: "SET_TOKEN", newValue: token }))
      .catch(err => console.log("Error al coger el token"));
  }, [dispatch]);
  return (
    <div className="containerHome">
      <Header />
      <TableContainer />
    </div>
  );
};

export default ContainerHome;
