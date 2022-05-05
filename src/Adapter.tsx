import App from "./App";
import "mapbox-gl/dist/mapbox-gl.css";
import './styles/main.scss';
import GlobalStyle from './styles/theme/global';
import { useAdapter } from "./hooks/tightly-coupled/useAdapter";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";

const Adapter = (props: any) => {
    const { routerProps } = useAdapter();
    const children = props.children || <App {...routerProps} />;

    return (
        <>
            <BrowserRouter {...routerProps}>
                <ContextProvider>
                    <GlobalStyle />
                    {children}
                </ContextProvider>
            </BrowserRouter>
        </>
    );
}

export default Adapter;