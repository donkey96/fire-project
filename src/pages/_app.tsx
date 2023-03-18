import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeFirebaseApp } from '@/src/lib/firebase/firebase';
import { getApp } from '@firebase/app';
import { MantineTheme, ColorScheme, ColorSchemeProvider, MantineProvider, DEFAULT_THEME, MantineThemeOverride, MantineThemeBase, ButtonProps } from '@mantine/core';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

const ButtonDefaultProps: Partial<ButtonProps> = {
  size: 'xs',
  color: 'cyan',
};
initializeFirebaseApp()
export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = () => setColorScheme((v) => v === 'dark' ? 'light' : 'dark');
  const theme: MantineThemeOverride = useMemo(() => ({
    colorScheme,
    components: {
      Button: {
        defaultProps: {
          size: 'xs',
          // color: 'grape',
          // variant: 'outline',
        },
        // styles: (theme: any) => {
        //   console.log(theme);
        //   return {...theme, primaryColor: '#000'};
        // }
        globalStyles: (_theme: any) => ({ color: '#000' }),
      },
    }
  }), [colorScheme]);
  
  
  
  return (
    // <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{...theme}} withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    // </ColorSchemeProvider>
  )
}
