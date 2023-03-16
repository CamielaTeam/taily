import Image from 'next/image'
import { Home } from '@mui/icons-material';

import { Box, Stack, Container, Link, Breadcrumbs, Card, CardContent, Typography, Grid, Button } from "@mui/material";

import PinkCat from "@/images/pink-cat.jpg"
import BlueCat from "@/images/blue-cat.jpg"

import styles from "./pets.module.scss"
import Navbar from '../shared/navbar/Navbar';
import PawTitle from '../shared/paw-title/PawTitle';
import AppointmentCard from '../shared/appointment-card/AppointmentCard';
import TreatmentsHomeTable from '../treatments/TreatmentsHomeTable';
import TreatmentCard from '../shared/treatment-card/TreatmentCard';

export default function PetDetail() {

    const APPOINTMENTS = [{
        id: "1",
        date: "25 Feb 2023",
        hour: "9:00 am",
        place: "Cats Lovers",
        status: "PENDING",
        pet: "Chloe",
    },
    {
        id: "3",
        date: "27 Feb 2023",
        hour: "10:00 am",
        place: "Cats Lovers",
        status: "PENDING",
        pet: "Chloe",
    }]



    const TREATMENTS = [{
        pet: "Chloe",
        medicine: "Prednisolona",
        dose: "2 tabletas",
        frequencyHours: 24,
        startDate: "25 Feb 2023",
        endDate: "10 Mar 2023",
    },
    {
        pet: "Chloe",
        medicine: "Prednisolona",
        dose: "1 y 1/2 tableta",
        frequencyHours: 24,
        startDate: "11 Mar 2023",
        endDate: "20 Mar 2023",
    }]

    return (
        <Stack spacing={6} padding={4}>
            <Navbar />
            <Container maxWidth="xl" className={styles.detail}>
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
                            href="/mascotas"
                        >
                            Mascotas
                        </Link>
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                        >
                            Chloe
                        </Link>
                    </Breadcrumbs>
                    <Stack direction="row" justifyContent="center">
                        <Grid container >
                            <Grid item xs={4} spacing={2}>
                                <Stack spacing={2} alignItems="center">
                                    <figure className={styles["pet-image"]}>
                                        <Image
                                            src={BlueCat}
                                            alt="Profile image"
                                            fill
                                        />
                                    </figure>
                                    <PawTitle title="Tail" />
                                    <Stack direction="row" spacing={2}>
                                        <Stack width="5rem" sx={{ aspectRatio: "1/1" }} bgcolor="grey.50" borderRadius={2} alignItems="center" justifyContent="center">
                                            <Typography variant="body2" textAlign="center">
                                                3
                                            </Typography>
                                            <Typography variant="subtitle2" textAlign="center" color="primary.dark">
                                                Años
                                            </Typography>
                                        </Stack>
                                        <Stack width="5rem" sx={{ aspectRatio: "1/1" }} bgcolor="grey.50" borderRadius={2} alignItems="center" justifyContent="center">
                                            <Typography variant="body2" textAlign="center">
                                                Macho
                                            </Typography>
                                            <Typography variant="subtitle2" textAlign="center" color="primary.dark">
                                                Sexo
                                            </Typography>
                                        </Stack>
                                        <Stack width="5rem" sx={{ aspectRatio: "1/1" }} bgcolor="grey.50" borderRadius={2} alignItems="center" justifyContent="center">
                                            <Typography variant="body2" textAlign="center">
                                                4kg
                                            </Typography>
                                            <Typography variant="subtitle2" textAlign="center" color="primary.dark">
                                                Peso
                                            </Typography>
                                        </Stack>
                                    </Stack>

                                </Stack>

                            </Grid>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row" flexWrap="wrap">
                                    <Stack spacing={2}>
                                        <Stack direction="row" justifyContent="space-between">
                                            <PawTitle title="Citas" />
                                            <Link href="/citas">
                                                <Button variant="outlined">Ver mas</Button>
                                            </Link>
                                        </Stack>
                                        <Stack spacing={2}>
                                            {APPOINTMENTS.map((appointment, key) => <AppointmentCard appointment={appointment} key={key} />)}
                                        </Stack>
                                    </Stack>

                                    <Stack spacing={2}>
                                        <Stack direction="row" justifyContent="space-between">
                                            <PawTitle title="Tratamientos" />
                                            <Link href="/tratamientos">
                                                <Button variant="outlined">Ver mas</Button>
                                            </Link>
                                        </Stack>
                                        <Stack spacing={2}>
                                            {TREATMENTS.map((treatment, key) => <TreatmentCard treatment={treatment} key={key} />)}
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Grid>

                        </Grid>

                    </Stack>
                </Stack>
            </Container >
        </Stack >
    )
}