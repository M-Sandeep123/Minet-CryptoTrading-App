import { Meta, StoryFn } from "@storybook/react";
import StatGraph from ".";
import { GRAPH_REPORT } from "../../../constants";

export default {
  title: "organisms/Trade-Graph",
  component: StatGraph,
} as Meta<typeof StatGraph>;

const Template: StoryFn<typeof StatGraph> = (args) => <StatGraph {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  graphData: GRAPH_REPORT,
  layoutWidth: "792.02px",
  layoutHeight: "375.698px",
};
