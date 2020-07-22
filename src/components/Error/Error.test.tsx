import React from "react";

import { Error } from "./";
import { shallow } from "enzyme";

describe("Button Component", () => {
  it("should render Error component", () => {
    const wrapper = shallow(<Error message="Error Message" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly", () => {
    const wrapper = shallow(<Error message="Error Message" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("it should not return null", () => {
    const wrapper = shallow(<Error message="Error Message" />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it("it should Render Title ", () => {
    const wrapper = shallow(<Error message="Error Message" />);

    expect(wrapper.props().children).toEqual("Error Message");
  });
});
