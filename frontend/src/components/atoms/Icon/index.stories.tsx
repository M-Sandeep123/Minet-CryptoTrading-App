import IconAtom ,{IconProps} from '.';
import logOut from '/public/assets/icons/logout.png';

import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Atoms/IconAtom',
    component: IconAtom,
  } as Meta;
  
  const Template: StoryFn<IconProps> = (args) => <IconAtom {...args} style={{ color: 'blue' }}/>;
  
  export const LogOut = Template.bind({});
  LogOut.args = {
    src: logOut,
    alt: 'Logout',
    width: '32px',
    height: '32px',
    onClick: action('clicked'),
  };
  