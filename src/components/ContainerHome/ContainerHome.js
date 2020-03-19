import React, { useEffect } from "react";
import { useGlobalState } from "../../state/useGlobalState";
import { getToken, getCategories } from "../../services/questionsService";
import { Header, TableContainer } from "../../components";

const ContainerHome = () => {
  const [{ token, categories }, dispatch] = useGlobalState();

  useEffect(() => {
    getToken()
      .then(token => dispatch({ type: "SET_TOKEN", newValue: token }))
      .catch(err => console.log(`${err} on getting token`));
    getCategories()
      .then(categories =>
        dispatch({ type: "SET_CATEGORIES", newValue: categories })
      )
      .catch(err => console.log(`${err} on getting categories`));
  }, [dispatch]);
  return (
    <div className="containerHome">
      <Header />
      <TableContainer />
    </div>
  );
};

export default ContainerHome;
