import React from "react";
import { ArtistsList } from "./";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ArtistCard } from "../ArtistCard";
import { artistsList } from "../../utils/data";
const mockStore = configureStore([thunk]);

describe("ArtistsList Component", () => {
  let store = mockStore({
    genres: {
      data: [],
      artists: artistsList,
    },
  });

  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <ArtistsList />
      </Provider>
    );

  it("should render my component", () => {
    const wrapper = getWrapper();

    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly", () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  it("it should not return null", () => {
    const wrapper = getWrapper();

    expect(wrapper.isEmptyRender()).toBe(false);
  });

  it("should render 2 elemnts in store  ", () => {
    const wrapper = getWrapper();

    expect(wrapper.find(ArtistCard).length).toEqual(2);
  });
});
