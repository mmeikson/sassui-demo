'use client'

import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  HStack,
  Divider,
  Button,
  Avatar,
  Badge,
} from '@chakra-ui/react'
import {
  FiHome,
  FiInbox,
  FiUsers,
  FiTag,
  FiChevronDown,
  FiBell,
  FiSettings,
} from 'react-icons/fi'

const Sidebar = () => {
  return (
    <Box
      as="nav"
      width="240px"
      flexShrink={0}
      flexGrow={0}
      bg="#ffffff"
      borderRight="1px"
      borderColor="rgba(0, 0, 0, 0.1)"
      height="100vh"
      position="fixed"
      left={0}
      top={0}
    >
      {/* Sidebar Header */}
      <Flex
        p="10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center">
          <Text fontSize="sm" fontWeight="semibold" color="#abadaf">
            Saas UI
          </Text>
        </Flex>
        <Box p="8px 6px">
          <Icon as={FiBell} boxSize={5} color="#ffffff" />
          <Badge
            position="absolute"
            top="-1"
            right="-1"
            bg="#0ea371"
            borderColor="#ffffff"
            boxSize={2}
            borderRadius="full"
          />
        </Box>
      </Flex>

      {/* Navigation Menu */}
      <VStack spacing="10px" p="0 10px" align="stretch">
        {/* Primary Navigation */}
        <VStack spacing="1px" align="stretch">
          <Button
            leftIcon={<Icon as={FiHome} boxSize={4} />}
            justifyContent="flex-start"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            bg="#e7e7e8"
            color="gray.900"
            _hover={{ bg: "#e7e7e8" }}
          >
            Dashboard
          </Button>
          <Button
            leftIcon={<Icon as={FiInbox} boxSize={4} />}
            justifyContent="flex-start"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color="gray.600"
          >
            Inbox
          </Button>
          <Button
            leftIcon={<Icon as={FiUsers} boxSize={4} />}
            justifyContent="flex-start"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color="gray.600"
          >
            Contacts
          </Button>
        </VStack>

        {/* Tags Section */}
        <VStack spacing="1px" align="stretch" pt={4}>
          <Flex justifyContent="space-between" alignItems="center" px="8px" h="24px">
            <Text fontSize="xs" color="gray.600">Tags</Text>
            <Icon as={FiChevronDown} boxSize={4} color="gray.600" />
          </Flex>
          <Button
            leftIcon={<Icon as={FiTag} boxSize={4} color="#8952e0" />}
            justifyContent="space-between"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color="gray.600"
          >
            Developer
            <Text fontSize="sm" color="gray.600">210</Text>
          </Button>
          <Button
            leftIcon={<Icon as={FiTag} boxSize={4} color="#0ea371" />}
            justifyContent="space-between"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color="gray.600"
          >
            Designer
            <Text fontSize="sm" color="gray.600">83</Text>
          </Button>
          <Button
            leftIcon={<Icon as={FiTag} boxSize={4} color="#347fdb" />}
            justifyContent="space-between"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color="gray.600"
          >
            Partner
            <Text fontSize="sm" color="gray.600">12</Text>
          </Button>
          <Button
            leftIcon={<Icon as={FiTag} boxSize={4} color="#7d7f83" />}
            justifyContent="space-between"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color="gray.600"
          >
            Prospect
            <Text fontSize="sm" color="gray.600">23</Text>
          </Button>
        </VStack>
      </VStack>

      {/* Sidebar Footer */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p="10px"
        borderTop="1px"
        borderColor="rgba(0, 0, 0, 0.1)"
      >
        <Button
          leftIcon={<Icon as={FiSettings} boxSize={4} />}
          variant="ghost"
          size="sm"
          color="gray.600"
          width="100%"
          justifyContent="flex-start"
          p="8px 6px"
        >
          Settings
        </Button>
      </Box>
    </Box>
  )
}

export default Sidebar 