import { createContext, useContext, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import green from '../styles/theme/green';

export interface IThemeProvider {
    currentTheme: DefaultTheme;
    setNewTheme: (args: DefaultTheme) => void
}

const themeReducer = (state: any, updatedTheme: DefaultTheme) => {
    return {...state, updatedTheme};
}

const ThemeContext = createContext<IThemeProvider>({} as IThemeProvider);

export const ThemeContextProvider = ({children}: any) => {
    const [currentTheme, setNewTheme] = useReducer(themeReducer, []);
    const themeContextProviderValue: IThemeProvider = { currentTheme, setNewTheme };

    // set default theme
    if (Array.isArray(currentTheme) && !currentTheme.length) {
        setNewTheme(green);
    }

    return (
       <ThemeContext.Provider value={themeContextProviderValue}>
            <ThemeProvider theme={currentTheme.updatedTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}



export const useThemeContext = () => useContext(ThemeContext);
