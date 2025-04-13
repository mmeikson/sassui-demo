'use client'

import {
  Box,
  VStack,
  HStack,
  Icon,
  Text,
  Avatar,
  AvatarBadge,
  Button,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react'
import { FiHome, FiInbox, FiUsers, FiChevronDown, FiSettings } from 'react-icons/fi'

const navItems = [
  { icon: FiHome, label: 'Dashboard', href: '/' },
  { icon: FiInbox, label: 'Inbox', href: '/inbox' },
  { icon: FiUsers, label: 'Contacts', href: '/contacts' },
]

const tagItems = [
  { label: 'Developer', count: 210, color: '#0ea371' },
  { label: 'Designer', count: 83, color: '#e53e3e' },
  { label: 'Partner', count: 12, color: '#c37b24' },
  { label: 'Prospect', count: 23, color: '#d2a01e' },
]

export function Sidebar() {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true })

  return (
    <Box
      as="nav"
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      width="240px"
      bg="#171a1d"
      borderRight="1px"
      borderColor="#1d2025"
      py="4"
    >
      {/* Header */}
      <Box px="4" mb="4">
        <HStack justify="space-between" align="center" h="52px">
          <HStack spacing="2">
            <Avatar size="sm" name="TA" bg="#abadaf">
              <AvatarBadge boxSize="6" borderColor="white" bg="#0ea371" />
            </Avatar>
            <Text fontSize="13px" fontWeight="semibold" color="#ffffff">Saas UI</Text>
          </HStack>
          <Button variant="ghost" size="sm" p="1">
            <Icon as={FiSettings} boxSize="5" color="#abadaf" />
          </Button>
        </HStack>
      </Box>

      {/* Main Navigation */}
      <VStack spacing="1" align="stretch" px="4" mb="4">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            justifyContent="flex-start"
            h="32px"
            px="3"
            color="#abadaf"
            _hover={{ bg: '#1d2025', color: '#ffffff' }}
            leftIcon={<Icon as={item.icon} boxSize="4" />}
          >
            <Text fontSize="13px" fontWeight="normal">{item.label}</Text>
          </Button>
        ))}
      </VStack>

      {/* Tags Section */}
      <Box px="4">
        <Button
          variant="ghost"
          justifyContent="space-between"
          w="full"
          h="24px"
          onClick={onToggle}
          color="#abadaf"
          _hover={{ bg: 'transparent' }}
        >
          <Text fontSize="12px" fontWeight="normal">Tags</Text>
          <Icon as={FiChevronDown} boxSize="4" transform={isOpen ? 'rotate(180deg)' : 'none'} />
        </Button>

        <Collapse in={isOpen}>
          <VStack spacing="1" align="stretch" mt="1">
            {tagItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                justifyContent="space-between"
                h="32px"
                px="3"
                color="#abadaf"
                _hover={{ bg: '#1d2025', color: '#ffffff' }}
                leftIcon={
                  <Box w="14px" h="14px" borderRadius="full" bg={item.color} />
                }
              >
                <Text fontSize="13px" fontWeight="normal">{item.label}</Text>
                <Text fontSize="13px" fontWeight="normal">{item.count}</Text>
              </Button>
            ))}
          </VStack>
        </Collapse>
      </Box>
    </Box>
  )
} 