import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@saas-ui/date-picker';
import { parseZonedDateTime } from '@internationalized/date';
import { Box, Icon } from '@chakra-ui/react';
import { FiCalendar } from 'react-icons/fi';

const meta = {
  title: 'Saas UI/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: {
      start: parseZonedDateTime('2023-12-20T00:00:00[UTC]'),
      end: parseZonedDateTime('2024-01-19T00:00:00[UTC]')
    },
    onChange: (value) => {
      console.log('Date range changed:', value);
    },
  },
};

export const WithIcon: Story = {
  args: {
    defaultValue: {
      start: parseZonedDateTime('2023-12-20T00:00:00[UTC]'),
      end: parseZonedDateTime('2024-01-19T00:00:00[UTC]')
    },
    onChange: (value) => {
      console.log('Date range changed:', value);
    },
  },
  render: (args) => (
    <Box
      borderColor="#e7e7e8"
      borderWidth="1px"
      borderRadius="md"
      h="32px"
      display="flex"
      alignItems="center"
      px={3}
    >
      <Icon as={FiCalendar} boxSize={4} mr={2} />
      <DateRangePicker {...args} />
    </Box>
  ),
};

export const CustomLocale: Story = {
  args: {
    defaultValue: {
      start: parseZonedDateTime('2023-12-20T00:00:00[UTC]'),
      end: parseZonedDateTime('2024-01-19T00:00:00[UTC]')
    },
    onChange: (value) => {
      console.log('Date range changed:', value);
    },
    locale: 'fr-FR',
  },
}; 