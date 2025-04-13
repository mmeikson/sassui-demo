import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@chakra-ui/react';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    colorScheme: 'blue',
  },
}; 