import Head from 'next/head'
import Layout from "@/components/Layout";
import FadeInText from "@/components/FadeInText";
import Link from "next/link";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import React from "react";

export default function Home() {
    const IntroText = 'Hi, I\'m Michelle Tang :D'
    return (
        <>
            <Head>
                <title>Michelle Tang</title>
                <meta name="description" content="Michelle Tang's Portfolio Page"/>

            </Head>
            <main className='flex text-dark w-full min-h-screen'>
                <Layout>
                    <div className="flex justify-between w-full">
                        <div className='w-1/2 flex flex-col items-center self-center'>
                            <FadeInText text={IntroText} className='!text-left'/>
                            <p className='my-4 text-base font-medium'>A full stack developer with a major focus on
                                front-end development.</p>
                            <div className='flex item-center self-start mt-2'>
                                <Link target={'_blank'}
                                      className='flex items-center bg-primary text-light p-2.5 px-4
                                      rounded-lg text-lg font-semibold hover:bg-primaryDark hover:text-dark
                                      border border-solid border-transparent border-2 hover:border-dark
                                      transition-colors tracking-wide'
                                      href='/Michelle_Tang_fsd_Resume_230503.pdf'
                                      download={true}
                                >
                                    <DownloadRoundedIcon className='mr-1 -ml-1'/> Resume
                                </Link>
                                {/*todo: when contact me has margin/padding, smaller viewport will cause resume btn to align with this margin/padding*/}
                                <Link target={'_blank'}
                                      className='ml-4 text-lg font-medium m-2.5'
                                      href='mailto:shmtang@hotmail.com'>
                                    <div className='relative group text-dark'>
                                        Contact
                                        <span className='h-[2px] w-0 inline-block bg-primary absolute left-0 -bottom-1
                                        group-hover:w-full transition-[width] ease duration-300 rounded-lg'
                                        >&nbsp;</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}
