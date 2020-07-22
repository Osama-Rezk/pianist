import React from "react";

import { GenreCard } from "./";
import { shallow } from "enzyme";

let genre = {
  id: 1,
  name: "Pop",
  picture:
    "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80",
  picture_big: "",
  picture_medium: "",
  picture_small: "",
  picture_xl: "",
  type: "",
};

describe("Button Component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<GenreCard {...genre} onClick={() => {}} />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly", () => {
    const wrapper = shallow(<GenreCard {...genre} onClick={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("it should not return null", () => {
    const wrapper = shallow(<GenreCard {...genre} onClick={() => {}} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it("should render children correctly ", () => {
    const wrapper = shallow(<GenreCard {...genre} onClick={() => {}} />);

    expect(wrapper.find("#genrename").length).toEqual(1);
    expect(wrapper.find("#genrepic").length).toEqual(1);
  });

  it("should call mock function when button is clicked", () => {
    const mockFn = jest.fn();

    const wrapper = shallow(<GenreCard {...genre} onClick={mockFn} />);
    wrapper.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
