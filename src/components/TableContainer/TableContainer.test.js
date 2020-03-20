import React from "react";
import { shallow } from "enzyme";
import { Provider } from "../../state/useGlobalState";
import { initialState, reducer } from "../../state/reducer";
import TableContainer from "./TableContainer.styled";

describe("<TableContainer/>", () => {
  it("should renders correctly", () => {
    shallow(
      <Provider reducer={reducer} initialState={initialState}>
        <TableContainer />
      </Provider>
    );
  });
});
