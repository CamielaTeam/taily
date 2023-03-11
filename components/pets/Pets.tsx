import Image from 'next/image'
import { Home } from '@mui/icons-material';

import { Button, Stack, Container, Link, Breadcrumbs, Card, CardContent, Typography } from "@mui/material";

import PinkCat from "@/images/pink-cat.jpg"
import BlueCat from "@/images/blue-cat.jpg"

import styles from "./pets.module.scss"
import Navbar from '../shared/navbar/Navbar';
import PawTitle from '../shared/paw-title/PawTitle';
import AppointmentCard from '../shared/appointment-card/AppointmentCard';
import TreatmentsHomeTable from '../treatments/TreatmentsHomeTable';

export default function Pets() {

    const APPOINTMENTS = [{
        name: "Cita médica",
        pet: "Tail",
        doctor: "Jenifer Muñiz",
        date: "25 Feb 2023",
        hour: "8:30 am"
    },
    {
        name: "Cita médica",
        pet: "Chloe",
        doctor: "Jenifer Muñiz",
        date: "25 Feb 2023",
        hour: "9:00 am"
    }]

    return (
        <Stack spacing={6} padding={4}>
            <Navbar />
            <Container maxWidth="xl" className={styles.container}>
                <Stack spacing={2}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/"
                        >
                            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                            Inicio
                        </Link>
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                        >
                            Mascotas
                        </Link>
                    </Breadcrumbs>
                    <PawTitle title="Mascotas" />
                    <Link href="/agregar-mascota" sx={{ alignSelf: "end" }}>
                        <Button variant="contained">Agregar mascota</Button>
                    </Link>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Card>
                            <CardContent>
                                <Stack alignItems="center">
                                    <figure className={styles.pet}>
                                        <Image
                                            src={PinkCat}
                                            alt="PinkCat"
                                            width={200}
                                            height={200}
                                        />
                                    </figure>
                                    <Typography variant="h4">
                                        Chloe
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Gata
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        3 años
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <Stack alignItems="center">
                                    <figure className={styles.pet}>
                                        <Image
                                            src={BlueCat}
                                            alt="BlueCat"
                                            width={200}
                                            height={200}
                                        />
                                    </figure>
                                    <Typography variant="h4">
                                        Tail
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Gato
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        3 años
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Stack>
                </Stack>
            </Container >
        </Stack >
    )
}