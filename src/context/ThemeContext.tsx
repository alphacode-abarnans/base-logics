'use client'
import defaultTheme from '../../default-theme.json'
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
    theme: defaultTheme, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    setTheme: (config: any) => {}, 
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemeProvider = ({ children, config  } : any) => {
  const [currentConfig, setCurrentConfig] = useState(config);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateConfig = async (newConfig:any) => {
    setCurrentConfig(newConfig);
    compileTailwind();
  };

  const compileTailwind = async () => {
    try {
      await fetch('/api/build-tailwind');
    } catch (error) {
      console.error('Failed to build Tailwind CSS:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{theme : currentConfig,setTheme : updateConfig}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the config in any component
export const useConfig = () => {
  return useContext(ThemeContext);
};

