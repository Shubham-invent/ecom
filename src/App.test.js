import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import CardItem from "./components/CardItem";
import ListItem from "./components/ListItem";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import React from "react";
import Sidebar from "./components/Sidebar";
import UserDetails from "./components/UserDetails";
import ViewDetails from "./components/ViewDetails";
import configureStore from "./store/configureStore";

const store = configureStore({});

configure({ adapter: new Adapter() });

describe("<ViewDetails/>", () => {
  it("renders", () => {
    const wrapper = shallow(<ViewDetails />);
    expect(wrapper).toBeTruthy();
  });
});

describe("<CardItem/>", () => {
  it("renders", () => {
    const wrapper = shallow(
      <CardItem
        details={{
          title: "hello",
          price: 89,
          seller: "",
          date: "20/12/1993",
          rating: 3,
          imgUrl: ""
        }}
      />
    );
    expect(wrapper).toBeTruthy();
  });
});

describe("<ListItem/>", () => {
  it("renders", () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper).toBeTruthy();
  });
});

describe("<Navbar/>", () => {
  it("renders", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toBeTruthy();
  });
});
describe("<Sidebar/>", () => {
  it("renders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
describe("<UserDetails/>", () => {
  it("renders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <UserDetails />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});
