import { Helmet } from 'react-helmet';
import {
    Route,
    Routes
} from "react-router-dom";
import { Suspense, useCallback, useEffect } from "react";
import FindPlace from '../../pages/FindPlace';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import Box from '../atoms/theme-box/Box';
import { IThemeConfig } from '../../config/ThemeConfig';
import green from '../../styles/theme/green';
import light from '../../styles/theme/light';
import dark from '../../styles/theme/dark';
import { ThemeContainer } from '../../styles/theme/global';
import { useThemeContext } from '../../context/ThemeContext';

const Headers = (props: any) => {
    const { getUserConfirmation } = props;

    const themeArray: IThemeConfig[] = [
        {
            themeName: 'green',
            themeColor: '#59ab64',
            themeValue: green
        },
        {
            themeName: 'light',
            themeColor: '#f5f5f5',
            themeValue: light
        },
        {
            themeName: 'dark',
            themeColor: '#4B4453',
            themeValue: dark
        }
    ];

    const themeContext = useThemeContext();

    const themeSlection = useCallback((type: string) => {
        const selectedTheme: IThemeConfig = themeArray.filter(theme => theme.themeName === type)[0];
        themeContext.setNewTheme(selectedTheme.themeValue);
    }, []);

    const onBackButtonClick = () => {
        getUserConfirmation("Do you want to leve the application?");
    };

    useEffect(() => {
        window.addEventListener("popstate", onBackButtonClick);
        return () => {
            window.removeEventListener("popstate", onBackButtonClick);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>My Place of Interests</title>
            </Helmet>

            <Navbar sticky='top' bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/">My Place of Interests</Navbar.Brand>

                    <ThemeContainer>
                        {themeArray.map((theme: IThemeConfig, index: number) => (
                            <Box type={theme.themeName}
                                boxColor={theme.themeColor}
                                onBoxClick={themeSlection}
                                key={index}></Box>
                        ))}
                    </ThemeContainer>
                </Container>
            </Navbar>

            <Suspense fallback="Loading...">
                <Routes>
                    <Route path='/' element={<FindPlace />}></Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default Headers;