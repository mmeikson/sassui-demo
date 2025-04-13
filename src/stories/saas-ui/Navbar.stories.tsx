import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@saas-ui/react';
import { Box, Text, Button } from '@chakra-ui/react';

const meta = {
  title: 'Saas UI/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <Text fontSize="sm" fontWeight="semibold">Dashboard</Text>
        <Button
          bg="#8952e0"
          color="white"
          fontSize="sm"
          fontWeight="semibold"
          _hover={{ bg: "#8952e0" }}
        >
          Buy Pro
        </Button>
      </Box>
    ),
  },
}; 