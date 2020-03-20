import React from "react";
import { shallow } from "enzyme";
import { Provider } from "../../../state/useGlobalState";
import { initialState, reducer } from "../../../state/reducer";
import Filters from "./Filters.styled";

describe("<Filters/>", () => {
  it("should renders correctly", () => {
    shallow(
      <Provider reducer={reducer} initialState={initialState}>
        <Filters />
      </Provider>
    );
  });
});
