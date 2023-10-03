import {Meta,StoryObj} from '@storybook/react';
import AvatarImg from '/public/assets/images/avatar.png';
import AvatarAtom from ".";

const meta:Meta<typeof AvatarAtom> = {
    title:"Atoms/Avatar",
    component:AvatarAtom
};

export default meta;

type Story = StoryObj<typeof AvatarAtom>;

export const AvatarImage:Story = {
    args:{
        src:AvatarImg,
        alt:"testuser"
    }
}

export const AvatarLetters:Story = {
    args:{
        children:"TS"
    }
}
