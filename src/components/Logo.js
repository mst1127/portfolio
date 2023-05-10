import React from "react";
import Link from "next/link";
import {La_Belle_Aurore} from "next/font/google";

const laBelleAurore = La_Belle_Aurore({
    subsets: ['latin'],
    variable: '--font-laBelleAurore',
    weight: '400',
})

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <Link href='/'
                  className={`${laBelleAurore.variable} font-laBelleAurore 
                  text-4xl flex items-center justify-center hover:text-primary transition-all`}
            >MichelleT</Link>
        </div>
    )
}

export default Logo