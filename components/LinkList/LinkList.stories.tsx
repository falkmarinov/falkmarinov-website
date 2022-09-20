import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AiOutlineUser } from 'react-icons/ai';

import { LinkList } from './LinkList';

export default {
  title: 'Component/LinkList',
  component: LinkList,
  args: {
    linkItems: [
      {
        icon: <AiOutlineUser />,
        label: 'Example 1',
        url: 'https://example.com/',
      },
      {
        icon: <AiOutlineUser />,
        label: 'Example 2',
        url: 'https://example.com/',
      },
      {
        icon: <AiOutlineUser />,
        label: 'Example 3',
        url: 'https://example.com/',
      },
    ],
  },
} as ComponentMeta<typeof LinkList>;

const Template: ComponentStory<typeof LinkList> = (args) => (
  <LinkList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
