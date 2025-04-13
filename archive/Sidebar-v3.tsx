'use client'

import {
  Box,
  Flex,
  Text,
  Icon,
  VStack,
  Button,
  Badge,
  useColorModeValue,
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
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const activeBgColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      as="nav"
      width="240px"
      flexShrink={0}
      flexGrow={0}
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
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
        <Box position="relative" p="8px 6px">
          <Icon as={FiBell} boxSize={5} color={textColor} />
          <Badge
            position="absolute"
            top="-1"
            right="-1"
            bg="#0ea371"
            borderColor="white"
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
            color={textColor}
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
            color={textColor}
          >
            Contacts
          </Button>
        </VStack>

        {/* Tags Section */}
        <VStack spacing="1px" align="stretch" pt={4}>
          <Flex justifyContent="space-between" alignItems="center" px="8px" h="24px">
            <Text fontSize="xs" color={textColor}>Tags</Text>
            <Icon as={FiChevronDown} boxSize={4} color={textColor} />
          </Flex>
          <Button
            leftIcon={<Icon as={FiTag} boxSize={4} color="#8952e0" />}
            justifyContent="space-between"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color={textColor}
          >
            Developer
            <Text fontSize="sm" color={textColor}>210</Text>
          </Button>
          <Button
            leftIcon={<Icon as={FiTag} boxSize={4} color="#0ea371" />}
            justifyContent="space-between"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color={textColor}
          >
            Designer
            <Text fontSize="sm" color={textColor}>83</Text>
          </Button>
          <Button
            leftIcon={<Icon as={FiTag} boxSize={4} color="#347fdb" />}
            justifyContent="space-between"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color={textColor}
          >
            Partner
            <Text fontSize="sm" color={textColor}>12</Text>
          </Button>
          <Button
            leftIcon={<Icon as={FiTag} boxSize={4} color="#7d7f83" />}
            justifyContent="space-between"
            variant="ghost"
            size="sm"
            h="32px"
            pl="16px"
            pr="16px"
            color={textColor}
          >
            Prospect
            <Text fontSize="sm" color={textColor}>23</Text>
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
        borderColor={borderColor}
      >
        <Button
          leftIcon={<Icon as={FiSettings} boxSize={4} />}
          variant="ghost"
          size="sm"
          color={textColor}
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