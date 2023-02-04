import React from 'react';
import { Header } from "./";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {/* with every react component you always get access to a special prop called children
             whenever we call a Layout component, and whatever is inside it, is the children */}
            {children}
        </>
    )
}

export default Layout