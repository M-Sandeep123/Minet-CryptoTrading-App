import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { timeLineData } from "../../../constants"; 
import Timeline, { TimelineProps } from "../Timeline"; 

export default {
  title: "Molecules/Timeline",
} as Meta<typeof Timeline>;

const Template: StoryFn<TimelineProps> = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  timeline: timeLineData,
};
