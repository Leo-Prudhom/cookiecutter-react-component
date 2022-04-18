import React from "react";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import "jest-styled-components";

import {{cookiecutter.component_name}} from "../{{cookiecutter.component_name}}";

describe("Global", () => {
  it("renders without crashing", () => {
    shallowWithTheme(<{{cookiecutter.component_name}} />);
  });

  it("renders correctly", () => {
    const wrapper = shallow(<{{cookiecutter.component_name}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});