import React from "react";
import ChipList from ".";
import { Meta, StoryFn } from "@storybook/react";
import { chipData } from "../../../constants";

export default {
  title: "Molecules/ChipList",
} as Meta<typeof ChipList>;

const Template: StoryFn = (args) => <ChipList chipListData={[]} {...args} />;

export const Default = Template.bind({});
Default.args = {
  chipListData: chipData,
};
