import Image from 'next/image'
import { Button, Stack, Container, Card, CardContent, Typography, Grid, Link } from "@mui/material";

import PinkCat from "@/images/pink-cat.jpg"
import BlueCat from "@/images/blue-cat.jpg"

import LogoImg from "@/images/logo.png"

import styles from "./home.module.scss"
import Navbar from '../shared/navbar/Navbar';
import PawTitle from '../shared/paw-title/PawTitle';
import AppointmentCard from '../shared/appointment-card/AppointmentCard';
import TreatmentsHomeTable from '../treatments/TreatmentsHomeTable';

export default function Home() {

    const APPOINTMENTS = [{
        id: "1",
        date: "25 Feb 2023",
        hour: "9:00 am",
        place: "Cats Lovers",
        status: "PENDING",
        pet: "Tail",
    },
    {
        id: "3",
        date: "27 Feb 2023",
        hour: "10:00 am",
        place: "Cats Lovers",
        status: "PENDING",
        pet: "Chloe",
    }]

    return (
        <Stack spacing={6} padding={4}>
            <Navbar />
            <Container maxWidth="xl" className={styles.container}>
                <Grid item xs={10}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <Stack spacing={2}>
                                <Stack direction="row" justifyContent="space-between">
                                    <PawTitle title="Mascotas" />
                                    <Link href="/mascotas">
                                        <Button variant="outlined">Ver mas</Button>
                                    </Link>
                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <Card>
                                        <CardContent >
                                            <Stack direction="row" spacing={2} minWidth="350px" maxWidth="100%">
                                                <figure className={styles.pet}>
                                                    <Image
                                                        src={PinkCat}
                                                        alt="PinkCat"
                                                        width={130}
                                                        height={130}
                                                    />
                                                </figure>
                                                <Stack>
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
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                    <Card >
                                        <CardContent>
                                            <Stack direction="row" spacing={2} minWidth="350px" maxWidth="100%">
                                                <figure className={styles.pet}>
                                                    <Image
                                                        src={BlueCat}
                                                        alt="BlueCat"
                                                        width={130}
                                                        height={130}
                                                    />
                                                </figure>
                                                <Stack>
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
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
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
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={2}>
                                <Stack direction="row" justifyContent="space-between">
                                    <PawTitle title="Tratamientos" />
                                    <Link href="/tratamientos">
                                        <Button variant="outlined">Ver mas</Button>
                                    </Link>
                                </Stack>
                                <TreatmentsHomeTable />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

            </Container >
        </Stack >
    )
}