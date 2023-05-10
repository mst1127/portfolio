import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {useRouter} from "next/router";

const CustLink = ({href, title, className=''})=>{
    const router = useRouter()
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-1
            group-hover:w-full transition-[width] ease duration-300 rounded-lg 
            ${router.asPath === href?'w-full':'w-0'}`}
            >&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return(
        <header
        className='w-full px-36 py-6 font-medium flex items-center justify-between'
        >
           <Logo/>
            <nav>
                <CustLink href='/' title='Home' className='mr-4'/>
                <CustLink href='/#about' scroll={false} title='About' className='mx-4'/>
                <CustLink href='/#projects' scroll={false} title='Projects' className='mx-4'/>
                <CustLink href='/#contact' scroll={false} title='Contact' className='ml-4'/>
            </nav>

        </header>
    )
}

export default NavBar