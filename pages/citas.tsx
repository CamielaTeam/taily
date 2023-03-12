import Appointments from '@/components/appointments/Appointments'
import Head from 'next/head'

export default function PetDetailPage() {
    return (
        <>
            <Head>
                <title>Citas</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Appointments />
            </main>
        </>
    )
}
