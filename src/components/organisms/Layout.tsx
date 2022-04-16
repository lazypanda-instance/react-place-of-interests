import Headers from "./Header";

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Headers />
            {children}
        </>
    );
}

export default Layout;