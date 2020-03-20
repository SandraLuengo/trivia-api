import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "../../../state/useGlobalState";
import { initialState, reducer } from "../../../state/reducer";
import Table from "./Table.styled";

describe("<Table/>", () => {
  let wrapper = mount(
    <Provider reducer={reducer} initialState={initialState}>
      <Table />
    </Provider>
  );
  it("should renders correctly", () => {
    shallow(
      <Provider reducer={reducer} initialState={initialState}>
        <Table />
      </Provider>
    );
  });
  it("it might have only one table tag", () => {
    expect(wrapper.find("table").length).toBe(1);
  });
});
