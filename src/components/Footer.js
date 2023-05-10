import React from 'react';
import Layout from './Layout';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
        font-medium text-sm'>
            <Layout className='py-8 text-center'>
                <span>&copy; {new Date().getFullYear()} Michelle Tang </span>
            </Layout>
        </footer>

    )
}


export default Footer;