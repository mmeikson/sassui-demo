'use client'

import {
  Sidebar as SaasSidebar,
  NavGroup,
  NavItem,
} from '@saas-ui/react'
import {
  Box,
  Button,
  Icon,
} from '@chakra-ui/react'
import {
  FiHome,
  FiInbox,
  FiUsers,
  FiTag,
  FiSettings,
  FiChevronDown,
} from 'react-icons/fi'

const Sidebar = () => {
  return (
    <SaasSidebar width="240px" borderRight="1px" borderColor="rgba(0, 0, 0, 0.1)">
      {/* Header */}
      <Box p="10px" display="flex" justifyContent="space-between" alignItems="center">
        <Button variant="ghost" leftIcon={<Icon as={FiHome} color="#abadaf" />}>
          Saas UI
        </Button>
        <Button variant="ghost" leftIcon={<Icon as={FiInbox} color="#abadaf" />} />
      </Box>

      {/* Main Navigation */}
      <NavGroup>
        <NavItem icon={<Icon as={FiHome} />} isActive>
          Dashboard
        </NavItem>
        <NavItem icon={<Icon as={FiInbox} />}>
          Inbox
        </NavItem>
        <NavItem icon={<Icon as={FiUsers} />}>
          Contacts
        </NavItem>
      </NavGroup>

      {/* Tags Section */}
      <NavGroup title="Tags" icon={<Icon as={FiTag} />} isCollapsible>
        <NavItem icon={<Icon as={FiTag} color="#8952e0" />}>
          Developer
          <Button variant="ghost" size="sm" ml="auto">210</Button>
        </NavItem>
        <NavItem icon={<Icon as={FiTag} color="#0ea371" />}>
          Designer
          <Button variant="ghost" size="sm" ml="auto">83</Button>
        </NavItem>
        <NavItem icon={<Icon as={FiTag} color="#347fdb" />}>
          Partner
          <Button variant="ghost" size="sm" ml="auto">12</Button>
        </NavItem>
        <NavItem icon={<Icon as={FiTag} color="#7d7f83" />}>
          Prospect
          <Button variant="ghost" size="sm" ml="auto">23</Button>
        </NavItem>
      </NavGroup>

      {/* Footer */}
      <Box p="10px">
        <NavItem icon={<Icon as={FiSettings} />}>
          Settings
        </NavItem>
      </Box>
    </SaasSidebar>
  )
}

export default Sidebar 