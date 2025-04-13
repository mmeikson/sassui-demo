'use client'

import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Progress,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Icon,
} from '@chakra-ui/react'
import {
  FiCalendar,
  FiArrowUp,
  FiArrowDown,
} from 'react-icons/fi'

const Dashboard = () => {
  return (
    <Box p="24px 10px" ml="240px">
      {/* Top Navigation Bar */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p="10px 16px"
        h="52px"
        bg="#ffffff"
        borderBottom="1px"
        borderColor="rgba(0, 0, 0, 0.1)"
      >
        <Text fontSize="sm" fontWeight="semibold">Dashboard</Text>
        <Button
          p="6px 12px"
          h="32px"
          bg="#8952e0"
          color="#ffffff"
          fontSize="sm"
          fontWeight="semibold"
          _hover={{ bg: "#8952e0" }}
        >
          Buy Pro
        </Button>
      </Flex>

      {/* Filter Bar */}
      <Flex
        alignItems="center"
        gap="12px"
        p="10px 16px"
        h="52px"
        bg="#ffffff"
        borderBottom="1px"
        borderColor="rgba(0, 0, 0, 0.1)"
      >
        <HStack spacing={0} h="32px" border="1px" borderColor="#e7e7e8" borderRadius="md">
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold">1 day</Button>
          <Divider orientation="vertical" h="32px" borderColor="#e7e7e8" />
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold" bg="#e7e7e8">3 days</Button>
          <Divider orientation="vertical" h="32px" borderColor="#e7e7e8" />
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold">1 week</Button>
          <Divider orientation="vertical" h="32px" borderColor="#e7e7e8" />
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold">1 month</Button>
          <Divider orientation="vertical" h="32px" borderColor="#e7e7e8" />
          <Button p="6px 12px" h="32px" variant="ghost" fontSize="sm" fontWeight="semibold">Custom</Button>
        </HStack>
        <Button
          p="4px 12px"
          h="32px"
          variant="outline"
          borderColor="#e7e7e8"
          fontSize="sm"
          fontWeight="semibold"
          leftIcon={<Icon as={FiCalendar} boxSize={4} />}
        >
          12/20/2023 - 1/19/2024
        </Button>
      </Flex>

      {/* Metrics and Chart Card */}
      <Box p="0 0 32px 0" mt="28px" bg="#ffffff" border="1px" borderColor="#e7e7e8" borderRadius="md">
        {/* KPI Metrics Row */}
        <Flex width="100%">
          {/* Revenue Metric */}
          <Box flex={1} p="20px" borderRight="1px" borderColor="#e7e7e8">
            <VStack align="start" spacing="4px">
              <Text fontSize="sm" fontWeight="medium">Revenue</Text>
              <Flex align="center" gap="10px">
                <Text fontSize="3xl" fontWeight="semibold">€39,623</Text>
                <Flex align="center" gap="4px">
                  <Icon as={FiArrowUp} color="#0ea371" boxSize={4} />
                  <Text fontSize="sm" color="#0ea371">8%</Text>
                </Flex>
              </Flex>
              <Text fontSize="sm">vs. €34.234 last period</Text>
            </VStack>
          </Box>
          
          {/* New Customers Metric */}
          <Box flex={1} p="20px" borderRight="1px" borderColor="#e7e7e8">
            <VStack align="start" spacing="4px">
              <Text fontSize="sm" fontWeight="medium">New customers</Text>
              <Flex align="center" gap="10px">
                <Text fontSize="3xl" fontWeight="semibold">130</Text>
                <Flex align="center" gap="4px">
                  <Icon as={FiArrowDown} color="#e53e3e" boxSize={4} />
                  <Text fontSize="sm" color="#e53e3e">8%</Text>
                </Flex>
              </Flex>
              <Text fontSize="sm">vs. 34.234 last period</Text>
            </VStack>
          </Box>
          
          {/* Churned Customers Metric */}
          <Box flex={1} p="20px" borderRight="1px" borderColor="#e7e7e8">
            <VStack align="start" spacing="4px">
              <Text fontSize="sm" fontWeight="medium">Churned customers</Text>
              <Flex align="center" gap="10px">
                <Text fontSize="3xl" fontWeight="semibold">7</Text>
                <Flex align="center" gap="4px">
                  <Icon as={FiArrowDown} color="#e53e3e" boxSize={4} />
                  <Text fontSize="sm" color="#e53e3e">8%</Text>
                </Flex>
              </Flex>
              <Text fontSize="sm">vs. 3 last period</Text>
            </VStack>
          </Box>
          
          {/* Active Customers Metric */}
          <Box flex={1} p="20px">
            <VStack align="start" spacing="4px">
              <Text fontSize="sm" fontWeight="medium">Active customers</Text>
              <Flex align="center" gap="10px">
                <Text fontSize="3xl" fontWeight="semibold">1199</Text>
                <Flex align="center" gap="4px">
                  <Icon as={FiArrowUp} color="#0ea371" boxSize={4} />
                  <Text fontSize="sm" color="#0ea371">8%</Text>
                </Flex>
              </Flex>
              <Text fontSize="sm">vs. 1199 last period</Text>
            </VStack>
          </Box>
        </Flex>
        
        {/* Chart Area */}
        <Box p="32px 0 0 0">
          <Flex gap="10px">
            {/* Y-Axis Labels */}
            <VStack spacing={0} pr="10px" align="end" justify="space-between" h="200px">
              <Text fontSize="xs">€3,600</Text>
              <Text fontSize="xs">€2,900</Text>
              <Text fontSize="xs">€1,900</Text>
              <Text fontSize="xs">€900</Text>
              <Text fontSize="xs">0€</Text>
            </VStack>
            
            {/* Chart Container */}
            <Box flex={1} position="relative" h="200px">
              {/* Grid Lines */}
              <Box position="absolute" top={0} left={0} right={0} bottom={0}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Box
                    key={i}
                    position="absolute"
                    top={`${i * 25}%`}
                    left={0}
                    right={0}
                    height="1px"
                    bg="#d3d4d5"
                  />
                ))}
              </Box>
              
              {/* Line Chart */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                borderLeft="1px"
                borderBottom="1px"
                borderColor="#d3d4d5"
              >
                {/* This is a placeholder for the actual chart data */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  height="2px"
                  bg="#8952e0"
                />
              </Box>
              
              {/* X-Axis Labels */}
              <Flex justifyContent="space-between" mt={2}>
                {['7/8', '8/8', '9/8', '10/8', '11/8', '12/8', '13/8', '14/8', '15/8', '16/8', '17/8', '18/8', '19/8', '20/8', '21/8'].map((date) => (
                  <Text key={date} fontSize="xs" transform="rotate(-45deg)" transformOrigin="top left">
                    {date}
                  </Text>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Data Cards Row */}
      <Flex gap="28px" mt="28px">
        {/* Top Countries Table Card */}
        <Box flex={1} bg="#ffffff" border="1px" borderColor="#e7e7e8" borderRadius="md">
          <Box p="12px 14px" borderBottom="1px" borderColor="#f1f1f2">
            <Text fontSize="sm" fontWeight="medium">Top countries</Text>
          </Box>
          
          <Table variant="unstyled">
            <Thead>
              <Tr>
                <Th flex={2} p="4px 16px" fontSize="xs" fontWeight="semibold">Country</Th>
                <Th flex={2} p="4px 16px" fontSize="xs" fontWeight="semibold">Sales</Th>
                <Th flex={1} p="4px 16px" fontSize="xs" fontWeight="semibold" isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr borderBottom="1px" borderColor="#f1f1f2">
                <Td flex={2} p="4px 16px" fontSize="sm">US</Td>
                <Td flex={2} p="4px 16px" fontSize="sm">30</Td>
                <Td flex={1} p="4px 16px" fontSize="sm" isNumeric>€10,247</Td>
                <Td><Progress value={70} size="xs" bg="#f1f1f2" sx={{ '& > div': { bg: '#8952e0' } }} /></Td>
              </Tr>
              <Tr borderBottom="1px" borderColor="#f1f1f2">
                <Td flex={2} p="4px 16px" fontSize="sm">India</Td>
                <Td flex={2} p="4px 16px" fontSize="sm">210</Td>
                <Td flex={1} p="4px 16px" fontSize="sm" isNumeric>€39,623</Td>
                <Td><Progress value={86} size="xs" bg="#f1f1f2" sx={{ '& > div': { bg: '#8952e0' } }} /></Td>
              </Tr>
              <Tr borderBottom="1px" borderColor="#f1f1f2">
                <Td flex={2} p="4px 16px" fontSize="sm">Brazil</Td>
                <Td flex={2} p="4px 16px" fontSize="sm">191</Td>
                <Td flex={1} p="4px 16px" fontSize="sm" isNumeric>€12,413</Td>
                <Td><Progress value={70} size="xs" bg="#f1f1f2" sx={{ '& > div': { bg: '#8952e0' } }} /></Td>
              </Tr>
              <Tr borderBottom="1px" borderColor="#f1f1f2">
                <Td flex={2} p="4px 16px" fontSize="sm">Netherlands</Td>
                <Td flex={2} p="4px 16px" fontSize="sm">134</Td>
                <Td flex={1} p="4px 16px" fontSize="sm" isNumeric>€19,996</Td>
                <Td><Progress value={60} size="xs" bg="#f1f1f2" sx={{ '& > div': { bg: '#8952e0' } }} /></Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* Activity Feed Card */}
        <Box flex={1} bg="#ffffff" border="1px" borderColor="#e7e7e8" borderRadius="md" p="14px 20px">
          <Text fontSize="sm" fontWeight="medium" mb="20px">Activity</Text>
          <VStack spacing="20px" align="stretch">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Box key={index}>
                <Flex gap="10px" align="center">
                  <Avatar size="sm" />
                  <Box>
                    <Text fontSize="sm" fontWeight="medium">User</Text>
                    <Text fontSize="sm" color="gray.500">
                      {index < 2 ? 'signed up · Just now' : 'upgraded to Pro · yesterday'}
                    </Text>
                  </Box>
                </Flex>
                {index < 5 && (
                  <Box h="14px" w="1px" bg="#d3d4d5" alignSelf="center" ml="12px" />
                )}
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default Dashboard 