import React from 'react';
import {motion} from 'framer-motion'

const textTransition = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.3,
            staggerChildren: 0.08,
        }
    }
}

const singleWordTransition = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1
        },
        y: 0,
    }
}

const FadeInText = ({text, className = ''}) => (
    <div className='w-full mx-auto py-2 flex items-center justify-center
        text-center overflow-hidden'>
        <motion.h1
            className={`inline-block w-full text-primary font-bold text-2xl ${className}`}
            variants={textTransition}
            initial='initial'
            animate='animate'
        >
            {text.split(' ').map((word, i) =>
                <motion.span key={word + '-' + i} className='inline-block'
                             variants={singleWordTransition}
                    // initial='initial'
                    // animate='animate'
                >
                    {word}&nbsp;
                </motion.span>
            )
            }
        </motion.h1>
    </div>
);

export default FadeInText;