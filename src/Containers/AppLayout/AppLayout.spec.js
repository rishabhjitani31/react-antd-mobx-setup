import React from "react";
import { shallow } from "enzyme";
import AppLayout from "./AppLayout";

describe("<AppLayout />", () => {
  test("renders", () => {
    const wrapper = shallow(<AppLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
