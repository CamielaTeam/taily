import Head from 'next/head'
import Login from '@/components/login/login'
import Signup from '@/components/signup/signup'


export default function SignupPage() {
    return (
        <>
            <Head>
                <title>Registro</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Signup />
            </main>
        </>
    )
}