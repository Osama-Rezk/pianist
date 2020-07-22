import React from "react";
import { GenreList } from "./";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { GenreCard } from "../GenreCard";
import { MemoryRouter } from "react-router-dom";
import { genreList } from "../../utils/data";
const mockStore = configureStore([thunk]);

describe("GenreList Component", () => {
  let store = mockStore({
    genres: {
      data: genreList,
      artists: [],
    },
  });

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
    useParams: () => ({
      id: 1,
    }),
    useRouteMatch: () => ({ url: "/home/1" }),
    useHistory: () => ({
      push: jest.fn(),
    }),
    useLocation: () => ({
      pathname: "localhost:3000/example/path",
    }),
  }));

  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <MemoryRouter>
          <GenreList />
        </MemoryRouter>
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

    expect(wrapper.find(GenreCard).length).toEqual(2);
  });
});
