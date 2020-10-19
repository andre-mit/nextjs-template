import React from 'react'
import Head from 'next/head'

import AzureLogo from '../assets/azure.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => (
    <Container>
        <Head>
            <title>Template</title>
        </Head>

        <AzureLogo />
        <h1>Base Next.js</h1>
        <p>App with ReactJS + Next.js</p>
    </Container>
)
export default Home
