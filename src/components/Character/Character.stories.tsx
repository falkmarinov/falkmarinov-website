import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VscSmiley } from 'react-icons/vsc';

import { Character } from './Character';

export default {
  title: 'Component/Character',
  component: Character,
  args: { children: <VscSmiley />, isHovered: false },
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof Character>;

const Template: ComponentStory<typeof Character> = (args) => (
  <Character {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Hovered = Template.bind({});
Hovered.args = { isHovered: true };

export const WithString = Template.bind({});
WithString.args = { children: 'S' };

export const WithNumber = Template.bind({});
WithNumber.args = { children: 10 };

export const WithIcon = Template.bind({});
WithIcon.args = {};
