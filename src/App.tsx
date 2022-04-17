import { Container } from 'react-bootstrap';
import Footer from './components/organisms/Footer';
import Layout from './components/organisms/Layout';
import { useReducer } from 'react';
import { IPlaceThemeProvider, PlaceThemeContext } from './context/ThemeContext';
import ThemeReducer from './context/ThemeReducer';
import './styles/main.scss';
import GlobalStyle from './styles/theme/global';
import { ThemeProvider } from 'styled-components';
import green from './styles/theme/green';
import "mapbox-gl/dist/mapbox-gl.css"; 

function App() {
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, []);
  const themeContextProviderValue: IPlaceThemeProvider = { currentTheme, setNewTheme };
  if (Array.isArray(currentTheme) && !currentTheme.length) {
    setNewTheme(green);
  }

  return (
    <PlaceThemeContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={currentTheme.updatedTheme}>
        <Layout>
          <GlobalStyle />
          <Container>Layout</Container>
          <Footer />
        </Layout>
      </ThemeProvider>
    </PlaceThemeContext.Provider>
  );
}

export default App;