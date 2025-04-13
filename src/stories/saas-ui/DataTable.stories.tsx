import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '@saas-ui/react';

const meta = {
  title: 'Saas UI/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
];

const columns = [
  { accessor: 'name', header: 'Name' },
  { accessor: 'email', header: 'Email' },
  { accessor: 'status', header: 'Status' },
];

export const Default: Story = {
  args: {
    data,
    columns,
  },
}; 