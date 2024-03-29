import AddPet from '@/components/add-pet/AddPet'
import Head from 'next/head'

export default function AddPetPage() {
    return (
        <>
            <Head>
                <title>Agregar mascota</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <AddPet />
            </main>
        </>
    )
}
