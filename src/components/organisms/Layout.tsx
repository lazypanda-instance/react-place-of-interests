import Headers from "./Header";

// type Props = {
//     children: React.ReactNode
// }

const Layout = (props: any) => {
    return (
        <>
            <Headers {...props}/>
            {props.children}
        </>
    );
}

export default Layout;