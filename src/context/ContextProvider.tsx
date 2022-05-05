import { ThemeContextProvider } from './ThemeContext';


const contextProvidersDataSource = [
    ThemeContextProvider
];

const ContextProvider = ({ children }: any) => {
    return contextProvidersDataSource.reduceRight((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>;
    }, children);
}

export default ContextProvider;