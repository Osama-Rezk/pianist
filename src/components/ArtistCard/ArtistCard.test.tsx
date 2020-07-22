import React from "react";

import { ArtistCard } from "./";
import { shallow } from "enzyme";

let artist = {
  id: 1,
  name: "Mr Fantastic",
  picture:
    "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80",
  picture_big: "",
  picture_medium: "",
  picture_small: "",
  picture_xl: "",
  radio: false,
  tracklist: "",
  type: "",
};

describe("Button Component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<ArtistCard {...artist} />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly", () => {
    const wrapper = shallow(<ArtistCard {...artist} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("it should not return null", () => {
    const wrapper = shallow(<ArtistCard {...artist} />);

    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it("should render children correctly ", () => {
    const wrapper = shallow(<ArtistCard {...artist} />);

    expect(wrapper.find("#artistpic").length).toEqual(1);
    expect(wrapper.find("#artistname").length).toEqual(1);
  });
});
