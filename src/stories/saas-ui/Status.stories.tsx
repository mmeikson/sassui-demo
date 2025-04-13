import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@chakra-ui/react';

const meta = {
  title: 'Saas UI/Status',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    colorScheme: 'green',
    children: 'Success',
  },
};

export const Error: Story = {
  args: {
    colorScheme: 'red',
    children: 'Error',
  },
};

export const Warning: Story = {
  args: {
    colorScheme: 'yellow',
    children: 'Warning',
  },
};

export const Info: Story = {
  args: {
    colorScheme: 'blue',
    children: 'Info',
  },
}; 