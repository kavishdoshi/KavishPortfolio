import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Layout from '@/components/Layout'
import profilePic from '../images/profile/profile.jpeg' 
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
import CheckLoggedIn from '@/components/hooks/useCheckLoggedIn'

const AnimatedNumbers = ({value}) => {

    const ref = useRef(null)
    
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:6000})
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])
    
    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}

const about = () => {
    
  return (
    <>
        <Head>
            <title>Kavish | About Page</title>
            <meta name='description' content='About Kavish'></meta>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout classname='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me!</h2>
                        <p className='font-medium'>Hi, I'm Kavish, a backend developer and a web developer with a passion for creating beautiful, functional, and user-centered experiences. With 3 years of experience in the field. I am always looking for new and innovative ways to bring ideas to life.</p>
                        <p className='my-4 font-medium'>I believe in solving problems and creating solutions that help and cater to enjoyable experiences for users.</p>
                        <p className='font-medium'>Either it be working on creating APIs, designing backend systems, or developing a website, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to a great product.</p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark md:col-span-8 md:order-1'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light xl:col-span-4  ' />
                        <Image src={profilePic} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Kavish" className='w-full h-auto rounded-2xl' />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:text-center'>
                                <AnimatedNumbers value={3} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xl:text-sm'>companies</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:text-center'>
                            <AnimatedNumbers value={20} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xl:text-sm xl:text-center'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:text-center'>
                            <AnimatedNumbers value={3} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg sm:text-base xl:text-sm xl:text-center'>years of experience</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about