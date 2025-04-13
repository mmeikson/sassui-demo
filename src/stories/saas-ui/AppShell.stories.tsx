import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AppShell, Navbar, Sidebar, SidebarSection, NavItem } from '@saas-ui/react';
import { Box, Text } from '@chakra-ui/react';

const meta = {
  title: 'Saas UI/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navbar: (
      <Navbar>
        <Text>Navbar Content</Text>
      </Navbar>
    ),
    sidebar: (
      <Sidebar>
        <SidebarSection>
          <NavItem>Dashboard</NavItem>
          <NavItem>Inbox</NavItem>
          <NavItem>Contacts</NavItem>
        </SidebarSection>
      </Sidebar>
    ),
    children: (
      <Box p="4">
        <Text>Main Content</Text>
      </Box>
    ),
  },
}; 