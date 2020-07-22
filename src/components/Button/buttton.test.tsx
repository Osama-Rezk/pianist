import React from "react";

import { Button } from "./";
import { shallow } from "enzyme";

describe("Button Component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Button title="Test Button" onClick={() => {}} />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly", () => {
    const wrapper = shallow(<Button title="Test Button" onClick={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("it should not return null", () => {
    const wrapper = shallow(<Button title="Test Button" onClick={() => {}} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it("it should Render Title ", () => {
    const wrapper = shallow(<Button title="Test Button" onClick={() => {}} />);

    expect(wrapper.props().children).toEqual("Test Button");
  });

  it("should call mock function when button is clicked", () => {
    const mockFn = jest.fn();

    const wrapper = shallow(<Button title="Test Button" onClick={mockFn} />);
    wrapper.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
