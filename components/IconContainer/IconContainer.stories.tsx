import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VscSmiley } from 'react-icons/vsc';

import { IconContainer } from './IconContainer';

export default {
  title: 'Container/IconContainer',
  component: IconContainer,
  args: { children: <VscSmiley /> },
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof IconContainer>;

const Template: ComponentStory<typeof IconContainer> = (args) => (
  <IconContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Hovered = Template.bind({});
Hovered.args = { isHovered: true };
