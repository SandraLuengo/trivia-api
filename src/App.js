import React from "react";
import { ContainerHome } from "./components";
import { initialState, reducer } from "./state/reducer";
import { Provider } from "./state/useGlobalState";
import "./App.css";

const App = () => {
  return (
    <Provider reducer={reducer} initialState={initialState}>
      <ContainerHome />
    </Provider>
  );
};

export default App;
