import React from "react";

import {{cookiecutter.component_name}} from "../{{cookiecutter.component_name}}";

export default {
  title: "{{cookiecutter.component_name}}",
  component: {{cookiecutter.component_name}},
};

const Template = (args) => <{{cookiecutter.component_name}} {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello {{cookiecutter.component_name}}",
};
