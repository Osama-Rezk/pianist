import React from "react";
import { Header } from "./";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { user } from "../../utils/data";
const mockStore = configureStore([thunk]);

describe("Header Component while user logged in ", () => {
  let store = mockStore({
    user,
  });

  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <Header />
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

    expect(wrapper.find("#welName").text()).toEqual(`Welcome ${user.name}`);

    expect(wrapper.find("#logLink").length).toEqual(0);
  });
});

describe("Header Component user not logged in", () => {
  let store2 = mockStore({
    user: {},
  });

  const getWrapper = () =>
    mount(
      <Provider store={store2}>
        <Header />
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

    expect(wrapper.find("#welName").length).toEqual(0);

    expect(wrapper.find("#logLink").length).toEqual(1);
  });
});
