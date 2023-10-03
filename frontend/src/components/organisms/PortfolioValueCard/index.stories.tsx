import { Meta, StoryFn } from "@storybook/react";
import PortfolioStats from ".";
import { GRAPH_REPORT } from "../../../constants";

export default {
  title: "organisms/Portfolio-Data",
  component: PortfolioStats,
} as Meta<typeof PortfolioStats>;

const Template: StoryFn<typeof PortfolioStats> = (args) => (
  <PortfolioStats {...args} />
);

export const PortfolioValues = Template.bind({});
PortfolioValues.args = {
  graphData: GRAPH_REPORT ,
  flagPointer: true,
  totalInvestLabel: "Total Investment",
  totalInvestChange: "-1.2%",
  totalInvestAmount: "$ 11,99,204",
  cryptoLabel: "Bitcoin",
  cryptoChange: "+ 8.2%",
  cryptoAmount: "$ 12,400",
};
