import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, Button } from '@chakra-ui/react';

const meta = {
  title: 'Saas UI/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimeRange: Story = {
  args: {
    size: 'sm',
    variant: 'ghost',
    spacing: 0,
    border: '1px',
    borderColor: '#e7e7e8',
    borderRadius: 'md',
    children: (
      <>
        <Button>1 day</Button>
        <Button bg="#e7e7e8">3 days</Button>
        <Button>1 week</Button>
        <Button>1 month</Button>
        <Button>Custom</Button>
      </>
    ),
  },
};

export const Variants: Story = {
  args: {
    size: 'md',
    spacing: 2,
    children: (
      <>
        <Button variant="solid">Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </>
    ),
  },
};

export const Sizes: Story = {
  args: {
    spacing: 2,
    children: (
      <>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </>
    ),
  },
}; 