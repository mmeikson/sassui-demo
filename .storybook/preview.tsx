import React from 'react';
import { Preview } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import { theme } from '../src/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <SaasProvider>
          <Story />
        </SaasProvider>
      </ChakraProvider>
    ),
  ],
};

export default preview;