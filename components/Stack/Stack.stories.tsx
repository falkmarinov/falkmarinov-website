import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stack } from './Stack';

export default {
  title: 'Layout/Stack',
  component: Stack,
  argTypes: {
    children: {
      control: false,
    },
    direction: {
      control: 'inline-radio',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      defaultValue: 'column',
    },
    align: {
      control: 'inline-radio',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      defaultValue: 'start',
    },
    justify: {
      control: 'inline-radio',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      defaultValue: 'start',
    },
    spacing: {
      control: 'select',
      options: [
        '0',
        'px',
        '0.5',
        '1',
        '1.5',
        '2',
        '2.5',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '14',
        '16',
        '20',
        '24',
        '28',
        '32',
        '36',
        '40',
        '44',
        '48',
        '52',
        '56',
        '60',
        '64',
        '72',
        '80',
        '96',
      ],
      defaultValue: '0',
    },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    {['A', 'B', 'C'].map((label, index) => {
      return (
        <div
          key={`${index}-${label}`}
          style={{
            backgroundColor: 'red',
            minWidth: '450px',
            minHeight: '30px',
            textAlign: 'center',
          }}
        >
          {label}
        </div>
      );
    })}
  </Stack>
);

export const Default = Template.bind({});
Default.args = {};
