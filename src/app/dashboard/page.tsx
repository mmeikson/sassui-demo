'use client'

import {
  AppShell,
  Navbar,
  Command,
  Status,
  DataTable,
} from '@saas-ui/react'
import { DateRangePicker } from '@saas-ui/date-picker'
import { parseZonedDateTime } from '@internationalized/date'
import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Divider,
  Progress,
  List,
  ListItem,
  Button,
  Icon,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react'
import {
  FiCalendar,
  FiArrowUp,
  FiArrowDown,
} from 'react-icons/fi'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import Sidebar from '@/components/Sidebar'

// Sample data for the chart
const chartData = [
  { date: '7/8', value: 3200 },
  { date: '8/8', value: 2800 },
  { date: '9/8', value: 3400 },
  { date: '10/8', value: 2900 },
  { date: '11/8', value: 3100 },
  { date: '12/8', value: 3500 },
  { date: '13/8', value: 3300 },
  { date: '14/8', value: 3600 },
  { date: '15/8', value: 3400 },
  { date: '16/8', value: 3200 },
  { date: '17/8', value: 3000 },
  { date: '18/8', value: 2800 },
  { date: '19/8', value: 2600 },
  { date: '20/8', value: 2400 },
  { date: '21/8', value: 2200 },
]

const Dashboard = () => {
  return (
    <AppShell
      sidebar={<Sidebar />}
      navbar={
        <Navbar>
          <Box>
            <Text fontSize="sm" fontWeight="semibold">Dashboard</Text>
          </Box>
          <Box>
            <Button
              bg="#8952e0"
              color="white"
              fontSize="sm"
              fontWeight="semibold"
              _hover={{ bg: "#8952e0" }}
            >
              Buy Pro
            </Button>
          </Box>
        </Navbar>
      }
    >
      <Command>
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
          <DateRangePicker
            defaultValue={{
              start: parseZonedDateTime('2023-12-20T00:00:00[UTC]'),
              end: parseZonedDateTime('2024-01-19T00:00:00[UTC]')
            }}
            onChange={(value) => {
              console.log('Date range changed:', value)
            }}
          />
        </Box>
      </Command>

      <Box p="24px 10px">
        {/* Metrics and Chart Card */}
        <Card mb="28px">
          <CardBody>
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
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid stroke="#d3d4d5" strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12, transform: 'translate(0, 10) rotate(-45)' }}
                        tickLine={false}
                        axisLine={{ stroke: '#d3d4d5' }}
                      />
                      <YAxis
                        domain={[0, 3600]}
                        tick={{ fontSize: 12 }}
                        tickLine={false}
                        axisLine={{ stroke: '#d3d4d5' }}
                        hide
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8952e0"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Flex>
            </Box>
          </CardBody>
        </Card>

        {/* Data Cards Row */}
        <Flex gap="28px">
          {/* Top Countries Table Card */}
          <Card flex={1}>
            <CardHeader p="12px 14px" borderBottom="1px" borderColor="#f1f1f2">
              <Text fontSize="sm" fontWeight="medium">Top countries</Text>
            </CardHeader>
            <CardBody>
              <Box overflowX="auto">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', color: '#6b7280' }}>Country</th>
                      <th style={{ textAlign: 'left', padding: '12px', fontSize: '12px', color: '#6b7280' }}>Sales</th>
                      <th style={{ textAlign: 'right', padding: '12px', fontSize: '12px', color: '#6b7280' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '12px', fontSize: '14px' }}>US</td>
                      <td style={{ padding: '12px', fontSize: '14px' }}>30</td>
                      <td style={{ padding: '12px', fontSize: '14px', textAlign: 'right' }}>€10,247</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontSize: '14px' }}>India</td>
                      <td style={{ padding: '12px', fontSize: '14px' }}>210</td>
                      <td style={{ padding: '12px', fontSize: '14px', textAlign: 'right' }}>€39,623</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontSize: '14px' }}>Brazil</td>
                      <td style={{ padding: '12px', fontSize: '14px' }}>191</td>
                      <td style={{ padding: '12px', fontSize: '14px', textAlign: 'right' }}>€12,413</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px', fontSize: '14px' }}>Netherlands</td>
                      <td style={{ padding: '12px', fontSize: '14px' }}>134</td>
                      <td style={{ padding: '12px', fontSize: '14px', textAlign: 'right' }}>€19,996</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </CardBody>
          </Card>

          {/* Activity Feed Card */}
          <Card flex={1}>
            <CardHeader p="14px 20px">
              <Text fontSize="sm" fontWeight="medium">Activity</Text>
            </CardHeader>
            <CardBody>
              <List>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <ListItem key={index}>
                    <Flex gap="10px" align="center">
                      <Box w="24px" h="24px" bg="gray.200" borderRadius="full" />
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
                  </ListItem>
                ))}
              </List>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </AppShell>
  )
}

export default Dashboard 