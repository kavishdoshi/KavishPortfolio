import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import EmbedWebsite from '@/components/EmbedWebsite'

const chatWithAI = () => {
    
  return (
    <>
        <Head>
            <title>Kavish | Chat With AI</title>
            <meta name='description' content='Chat About Kavish'></meta>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout classname='pt-16'>
                <AnimatedText text="Chat About Kavish!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='flex items-center w-full lg:flex-col'>
                    <EmbedWebsite url= { "https://chatkavishdetails.azurewebsites.net/" } />
                </div>
            </Layout>
        </main>
    </>
  )
}

export default chatWithAI