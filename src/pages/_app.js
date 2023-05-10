import '@/styles/globals.css'
import {Encode_Sans_Semi_Expanded} from 'next/font/google'
import Head from 'next/head'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const encode_sans_semi_expanded = Encode_Sans_Semi_Expanded({
    subsets: ['latin'],
    variable: '--font-enSansSemi',
    weight: '500',
})

export default function App({Component, pageProps}) {
    return (<>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${encode_sans_semi_expanded.variable} 
            font-enSansSemi text-dark bg-light w-full min-h-screen`}>
                <NavBar/>
                <Component {...pageProps} />
                <Footer/>
            </main>
        </>
    )
}
