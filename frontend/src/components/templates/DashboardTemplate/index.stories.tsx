import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import DashboardTemplate, { PropsType } from "../DashboardTemplate"; 

export default {
  title: "Templates/DashboardTemplate",
  component: DashboardTemplate,
} as Meta<typeof DashboardTemplate>;

const Template: StoryFn<PropsType> = (args) => <DashboardTemplate {...args} />;

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  leftContent: <div>This is a custom left content</div>,
  rightContent: <div>This is a custom right content</div>,
};

