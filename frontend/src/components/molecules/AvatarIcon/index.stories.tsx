import { Meta, StoryFn } from "@storybook/react";
import AvatarIcon from ".";
import AvatarImg from "/public/assets/images/avatar.png";
import DownArrowIcon from "/public/assets/icons/chevron-down.png";

export default {
  title: "molecules/avatar_icon",
  component: AvatarIcon,
} as Meta<typeof AvatarIcon>;

const Template: StoryFn<typeof AvatarIcon> = (args)=>( <AvatarIcon {...args}/>)

export const AvatarIconView = Template.bind({});
AvatarIconView.args={
    avatarSrc: AvatarImg,
    avatarAlt: "avatar-icon",
    iconSrc: DownArrowIcon,
    iconAlt:"down-icon",
    iconHeight:"32px",
    iconWidth:"32px",
}
