'use client'

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  VStack,
  HStack,
  Button,
  ButtonGroup,
  Divider,
  Icon,
  Avatar,
  AvatarGroup,
  Progress,
} from '@chakra-ui/react'
import { FiArrowUp, FiArrowDown, FiCalendar, FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const chartData = [
  { date: '7/8', value: 1200 },
  { date: '8/8', value: 1900 },
  { date: '9/8', value: 1500 },
  { date: '10/8', value: 2200 },
  { date: '11/8', value: 2900 },
  { date: '12/8', value: 2500 },
  { date: '13/8', value: 3100 },
  { date: '14/8', value: 3600 },
  { date: '15/8', value: 3200 },
  { date: '16/8', value: 2800 },
  { date: '17/8', value: 2400 },
  { date: '18/8', value: 2000 },
  { date: '19/8', value: 1600 },
  { date: '20/8', value: 1200 },
  { date: '21/8', value: 800 },
]

const topCountries = [
  { country: 'United States', users: 1200, percentage: 40 },
  { country: 'Germany', users: 800, percentage: 25 },
  { country: 'Netherlands', users: 400, percentage: 15 },
  { country: 'India', users: 200, percentage: 10 },
  { country: 'Japan', users: 100, percentage: 5 },
]

const recentActivities = [
  { user: 'John Doe', action: 'completed a task', time: '2 hours ago', trend: 'up' },
  { user: 'Jane Smith', action: 'created a new project', time: '3 hours ago', trend: 'up' },
  { user: 'Mike Johnson', action: 'updated settings', time: '4 hours ago', trend: 'neutral' },
  { user: 'Sarah Wilson', action: 'deleted a file', time: '5 hours ago', trend: 'down' },
  { user: 'David Brown', action: 'commented on a task', time: '6 hours ago', trend: 'neutral' },
]

export default function Dashboard() {
  return (
    <Box pl="240px" bg="#f9fafa" minH="100vh">
      {/* Navbar */}
      <Box bg="white" borderBottom="1px" borderColor="#e7e7e8" px="16" py="10">
        <HStack justify="space-between">
          <Heading size="sm" color="#0e1012">Dashboard</Heading>
          <Button bg="#8952e0" color="white" size="sm" fontWeight="semibold">
            Buy Pro
          </Button>
        </HStack>
      </Box>

      {/* Date Filters */}
      <Box bg="white" borderBottom="1px" borderColor="#e7e7e8" px="16" py="10">
        <HStack spacing="12">
          <ButtonGroup variant="outline" spacing="0" size="sm">
            <Button borderColor="#e7e7e8">1 day</Button>
            <Divider orientation="vertical" h="8" />
            <Button bg="#e7e7e8">3 days</Button>
            <Divider orientation="vertical" h="8" />
            <Button borderColor="#e7e7e8">1 week</Button>
            <Divider orientation="vertical" h="8" />
            <Button borderColor="#e7e7e8">1 month</Button>
            <Divider orientation="vertical" h="8" />
            <Button borderColor="#e7e7e8">Custom</Button>
          </ButtonGroup>
          <Button
            variant="outline"
            size="sm"
            leftIcon={<Icon as={FiCalendar} />}
            borderColor="#e7e7e8"
          >
            12/20/2023 - 1/19/2024
          </Button>
        </HStack>
      </Box>

      {/* Main Content */}
      <Box p="24">
        {/* KPI Cards */}
        <Grid templateColumns="repeat(4, 1fr)" gap="10" mb="32">
          <Card bg="white" border="1px" borderColor="#e7e7e8">
            <CardBody>
              <VStack align="start" spacing="4">
                <Text fontSize="13px" fontWeight="medium" color="#7d7f83">Revenue</Text>
                <HStack>
                  <Text fontSize="24px" fontWeight="semibold" color="#0e1012">€39,623</Text>
                  <HStack color="#0ea371">
                    <Icon as={FiArrowUp} />
                    <Text fontSize="13px">8%</Text>
                  </HStack>
                </HStack>
                <Text fontSize="13px" color="#7d7f83">vs. €34.234 last period</Text>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="white" border="1px" borderColor="#e7e7e8">
            <CardBody>
              <VStack align="start" spacing="4">
                <Text fontSize="13px" fontWeight="medium" color="#7d7f83">New customers</Text>
                <HStack>
                  <Text fontSize="24px" fontWeight="semibold" color="#0e1012">130</Text>
                  <HStack color="#e53e3e">
                    <Icon as={FiArrowDown} />
                    <Text fontSize="13px">8%</Text>
                  </HStack>
                </HStack>
                <Text fontSize="13px" color="#7d7f83">vs. 34.234 last period</Text>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="white" border="1px" borderColor="#e7e7e8">
            <CardBody>
              <VStack align="start" spacing="4">
                <Text fontSize="13px" fontWeight="medium" color="#7d7f83">Churned customers</Text>
                <HStack>
                  <Text fontSize="24px" fontWeight="semibold" color="#0e1012">7</Text>
                  <HStack color="#e53e3e">
                    <Icon as={FiArrowDown} />
                    <Text fontSize="13px">8%</Text>
                  </HStack>
                </HStack>
                <Text fontSize="13px" color="#7d7f83">vs. 3 last period</Text>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="white" border="1px" borderColor="#e7e7e8">
            <CardBody>
              <VStack align="start" spacing="4">
                <Text fontSize="13px" fontWeight="medium" color="#7d7f83">Active customers</Text>
                <HStack>
                  <Text fontSize="24px" fontWeight="semibold" color="#0e1012">1199</Text>
                  <HStack color="#0ea371">
                    <Icon as={FiArrowUp} />
                    <Text fontSize="13px">8%</Text>
                  </HStack>
                </HStack>
                <Text fontSize="13px" color="#7d7f83">vs. 1199 last period</Text>
              </VStack>
            </CardBody>
          </Card>
        </Grid>

        {/* Chart Section */}
        <Card bg="white" border="1px" borderColor="#e7e7e8" p="32" mb="32">
          <VStack align="start" spacing="10" w="full">
            <Heading size="sm" color="#0e1012">Revenue Overview</Heading>
            <Box w="full" h="300px">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e7e7e8" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12, color: '#7d7f83' }}
                    stroke="#7d7f83"
                  />
                  <YAxis 
                    tick={{ fontSize: 12, color: '#7d7f83' }}
                    stroke="#7d7f83"
                  />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8952e0" 
                    strokeWidth={2}
                    dot={{ fill: '#8952e0', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </VStack>
        </Card>

        {/* Bottom Panels */}
        <Grid templateColumns="repeat(2, 1fr)" gap="10">
          {/* Top Countries */}
          <Card bg="white" border="1px" borderColor="#e7e7e8">
            <CardHeader>
              <Heading size="sm" color="#0e1012">Top Countries</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="stretch" spacing="6">
                {topCountries.map((country, index) => (
                  <Box key={index}>
                    <HStack justify="space-between" mb="2">
                      <Text fontSize="13px" color="#0e1012">{country.country}</Text>
                      <Text fontSize="13px" color="#7d7f83">{country.users} users</Text>
                    </HStack>
                    <Progress 
                      value={country.percentage} 
                      size="sm" 
                      colorScheme="purple"
                      bg="#e7e7e8"
                    />
                  </Box>
                ))}
              </VStack>
            </CardBody>
          </Card>

          {/* Recent Activities */}
          <Card bg="white" border="1px" borderColor="#e7e7e8">
            <CardHeader>
              <Heading size="sm" color="#0e1012">Recent Activities</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="stretch" spacing="4">
                {recentActivities.map((activity, index) => (
                  <HStack key={index} justify="space-between">
                    <HStack spacing="3">
                      <Avatar size="sm" name={activity.user} />
                      <Box>
                        <Text fontSize="13px" color="#0e1012">{activity.user} {activity.action}</Text>
                        <Text fontSize="12px" color="#7d7f83">{activity.time}</Text>
                      </Box>
                    </HStack>
                    <Icon 
                      as={activity.trend === 'up' ? FiArrowUp : activity.trend === 'down' ? FiArrowDown : FiTrendingUp} 
                      color={activity.trend === 'up' ? '#0ea371' : activity.trend === 'down' ? '#e53e3e' : '#7d7f83'} 
                    />
                  </HStack>
                ))}
              </VStack>
            </CardBody>
          </Card>
        </Grid>
      </Box>
    </Box>
  )
} 