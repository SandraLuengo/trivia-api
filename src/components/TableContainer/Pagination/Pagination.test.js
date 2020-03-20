import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "../../../state/useGlobalState";
import { initialState, reducer } from "../../../state/reducer";
import Pagination from "./Pagination.styled";

describe("<Pagination/>", () => {
  let wrapper = mount(
    <Provider reducer={reducer} initialState={initialState}>
      <Pagination />
    </Provider>
  );
  it("should renders correctly", () => {
    shallow(
      <Provider reducer={reducer} initialState={initialState}>
        <Pagination />
      </Provider>
    );
  });
  it("it should have 5 elements with class numbers", () => {
    expect(wrapper.find(".numbers").length).toBe(5);
  });
});
