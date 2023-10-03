import React from "react";
import Dropdown from "../Dropdown"; 
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Atoms/Dropdown",  
} as Meta<typeof Dropdown>;

const Template: StoryFn = (args) => <Dropdown initialValue={""} options={[]} {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: "24",
  options: [
    { value: "24", name: "24h" },
    { value: "36", name: "36h" },
    { value: "48", name: "48h" },
  ],
};
