import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from './page';

const meta: Meta<typeof Dashboard> = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '100vh' }}>
      <Dashboard />
    </div>
  ),
}; 