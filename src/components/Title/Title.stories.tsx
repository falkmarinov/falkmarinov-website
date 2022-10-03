import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Title } from './Title';

export default {
  title: 'Typography/Title',
  component: Title,
  args: {
    children: 'Lorem Ipsum',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {};
