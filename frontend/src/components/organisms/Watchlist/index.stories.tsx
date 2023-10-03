import { Meta, StoryFn } from "@storybook/react";
import Watchlist from ".";
import { graphData } from "../../../constants";

export default {
  title: "Organisms/Watchlist",
} as Meta<typeof Watchlist>;

const Template: StoryFn<typeof Watchlist> = (args) => <Watchlist {...args} />;

export const WatchlistOrg = Template.bind({});
WatchlistOrg.args = {
  watchlistData: graphData,
  onClickDiscovery: () => {},
  onClickWatchList: () => {},
};
