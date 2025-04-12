'use client'

import { Button, Card, CardBody, CardHeader, Heading, Text, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <VStack spacing={8} align="stretch">
        <Heading size="2xl">Welcome to Saas UI</Heading>
        <Text fontSize="xl">This is a sample page using Saas UI components</Text>
        
        <Card>
          <CardHeader>
            <Heading size="md">Example Card</Heading>
          </CardHeader>
          <CardBody>
            <Text>This is a card component from Saas UI</Text>
            <Button colorScheme="blue" mt={4}>
              Click me
            </Button>
          </CardBody>
        </Card>
      </VStack>
    </main>
  )
} 