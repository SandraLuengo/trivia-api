import React from "react";
import { shallow } from "enzyme";
import { Provider } from "../../state/useGlobalState";
import { initialState, reducer } from "../../state/reducer";
import ContainerHome from "./ContainerHome.styled";

describe("<ContainerHome/>", () => {
  it("should renders correctly", () => {
    shallow(
      <Provider reducer={reducer} initialState={initialState}>
        <ContainerHome />
      </Provider>
    );
  });
});
