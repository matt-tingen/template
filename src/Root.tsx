import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { StrictMode } from 'react';
import { App } from './App';

// https://github.com/emotion-js/emotion/issues/1105#issuecomment-557726922
const emotionCache = createCache({
  key: 'root',
  speedy: process.env.NODE_ENV !== 'development',
  // Disable prefixes in dev env.
  ...(process.env.NODE_ENV === 'development' && { stylisPlugins: [] }),
});

emotionCache.compat = true;

export const Root = () => (
  <>
    <ColorModeScript initialColorMode="system" />
    <StrictMode>
      <CacheProvider value={emotionCache}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </CacheProvider>
    </StrictMode>
  </>
);
