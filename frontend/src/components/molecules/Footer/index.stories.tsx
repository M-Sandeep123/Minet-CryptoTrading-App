import React from "react";
import {
  LABEL,
  CAREER,
  PRIVACY,
  COPYRIGHT,
  LANGUAGE,
  HELP,
} from "../../../constants"; 
import Footer from ".";
import { StoryFn } from "@storybook/react";

export default {
  title: "Molecules/Footer",
};

const Template: StoryFn = (args) => <Footer  {...args} />;

export const Foter = Template.bind({});
Foter.args = {
  label: LABEL,
  career: CAREER,
  privacy: PRIVACY,
  copyright: COPYRIGHT,
  language: LANGUAGE,
  help: HELP,
  hindi: LANGUAGE,
};
