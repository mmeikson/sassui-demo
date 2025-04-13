import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Command } from '@saas-ui/react';
import { Box, Button, Divider, Icon } from '@chakra-ui/react';
import { FiCalendar } from 'react-icons/fi';

const meta = {
  title: 'Saas UI/Command',
  component: Command,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Box display="flex" gap="10px">
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold">1 day</Button>
          <Divider orientation="vertical" h="32px" borderColor="#e7e7e8" />
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold" bg="#e7e7e8">3 days</Button>
          <Divider orientation="vertical" h="32px" borderColor="#e7e7e8" />
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold">1 week</Button>
          <Divider orientation="vertical" h="32px" borderColor="#e7e7e8" />
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold">1 month</Button>
          <Divider orientation="vertical" h="32px" borderColor="#e7e7e8" />
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold">Custom</Button>
        </Box>
        <Box 
          borderColor="#e7e7e8" 
          borderWidth="1px" 
          borderRadius="md" 
          h="32px" 
          display="flex" 
          alignItems="center"
          p="4px 12px"
          gap="10px"
        >
          <Icon as={FiCalendar} boxSize={4} />
          <Box>Date Range Picker</Box>
        </Box>
      </>
    ),
  },
}; 