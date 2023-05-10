import React from "react";

const Layout = ({children, className = ''}) => {
    return (
        <div className={`${className} w-full h-full inline-block z-0 bg-light py-32 px-36`}>
            {children}
        </div>
    )
}
export default Layout