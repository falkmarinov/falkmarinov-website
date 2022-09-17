import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VscSmiley } from 'react-icons/vsc';

import { CharacterContainer } from './CharacterContainer';

export default {
  title: 'Container/CharacterContainer',
  component: CharacterContainer,
  args: { children: <VscSmiley /> },
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof CharacterContainer>;

const Template: ComponentStory<typeof CharacterContainer> = (args) => (
  <CharacterContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Hovered = Template.bind({});
Hovered.args = { isHovered: true };
