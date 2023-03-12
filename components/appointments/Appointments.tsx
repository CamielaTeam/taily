import Image from 'next/image'
import { Home } from '@mui/icons-material';

import { Stack, Container, Link, Breadcrumbs, Typography, Grid, Button, FormControl, InputLabel, MenuItem, Select, Box, useMediaQuery, useTheme } from "@mui/material";

import AppointmentsImg from "@/images/appointments.png"

import Navbar from '../shared/navbar/Navbar';
import styles from "./appointments.module.scss"
import PawTitle from '../shared/paw-title/PawTitle';
import AppointmentsTable from './AppointmentsTable';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import AppointmentCard from '../shared/appointment-card/AppointmentCard';

export default function Appointments() {
    const [selectedPet, setSelectedPet] = useState('all');
    const theme = useTheme();
    const isSmallOrLess =
        useMediaQuery(theme.breakpoints.down('xs'));


    const APPOINTMENTS = [
        {
            id: "1",
            date: "25 Feb 2023",
            hour: "9:00 am",
            place: "Cats Lovers",
            status: "PENDING",
            pet: "Tail",
        },
        {
            id: "2",
            date: "27 Feb 2023",
            hour: "10:00 am",
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
        },
        {
            id: "4",
            date: "27 Feb 2023",
            hour: "10:00 am",
            place: "Cats Lovers",
            status: "ATTENDED",
            pet: "Chloe",
        }]


    return (
        <Stack spacing={6} padding={4} className={styles.container}>
            <Navbar />
            <Container maxWidth="xl" className={styles.detail}>
                <Stack direction="row" spacing={6}>
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
                                Citas
                            </Link>
                        </Breadcrumbs>
                        <Stack direction="row" justifyContent="space-between">
                            <PawTitle title="Citas" />
                        </Stack>
                        <Grid container gap={3}>
                            <Grid item xs={12} md={3} >
                                <Stack spacing={2} alignItems="start">
                                    <FormControl variant="standard" sx={{ minWidth: "200px" }}>
                                        <InputLabel id="demo-simple-select-standard-label">Mascota</InputLabel>
                                        <Select

                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={selectedPet}
                                            onChange={(e) => { setSelectedPet(e.target.value); }}
                                            label="¿Qué mascota tienes?"
                                        >
                                            <MenuItem value="all">Todas</MenuItem>
                                            <MenuItem value="tail">Tail</MenuItem>
                                            <MenuItem value="chloe">Chloe</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <DatePicker label="Fecha inicial" />
                                    <DatePicker label="Fecha final" />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                {isSmallOrLess ?
                                    <Stack spacing={2} >
                                        {APPOINTMENTS.map((appointment, key) => <AppointmentCard appointment={appointment} key={key} />)}
                                    </Stack> :
                                    <Stack spacing={2} >
                                        <Stack direction="row" justifyContent="end">
                                            <Button variant="contained">Agregar cita</Button>
                                        </Stack>
                                        <Stack spacing={2}>
                                            <AppointmentsTable appointments={APPOINTMENTS} />
                                        </Stack>
                                    </Stack>
                                }
                            </Grid>
                        </Grid>
                    </Stack>
                    <Box display={isSmallOrLess ? "none" : "block"} maxWidth="300px" width="100%">
                        <figure>
                            <Image
                                src={AppointmentsImg}
                                alt="Care image"
                                fill
                            />
                        </figure>
                    </Box>
                </Stack>
            </Container >
        </Stack >
    )
}