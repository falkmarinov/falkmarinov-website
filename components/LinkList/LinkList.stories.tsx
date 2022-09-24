import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AiOutlineUser } from 'react-icons/ai';

import { LinkList } from './LinkList';

export default {
  title: 'Component/LinkList',
  component: LinkList,
} as ComponentMeta<typeof LinkList>;

const Template: ComponentStory<typeof LinkList> = (args) => (
  <LinkList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  linkItems: [
    {
      url: 'https://example.com/',
    },
    {
      url: 'https://example.com/',
    },
    {
      url: 'https://example.com/',
    },
  ],
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  linkItems: [
    {
      url: 'https://example.com/',
      label: 'Example 1',
    },
    {
      url: 'https://example.com/',
      label: 'Example 2',
    },
    {
      url: 'https://example.com/',
      label: 'Example 3',
    },
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  linkItems: [
    {
      url: 'https://example.com/',
      icon: <AiOutlineUser />,
    },
    {
      url: 'https://example.com/',
      icon: <AiOutlineUser />,
    },
    {
      url: 'https://example.com/',
      icon: <AiOutlineUser />,
    },
  ],
};
