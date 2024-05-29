import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Header'; 

interface ColorModeContextType {
  toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<ColorModeContextType>({ toggleColorMode: () => {} });

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
