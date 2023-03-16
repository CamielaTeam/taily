import Image from 'next/image'
import CatDog from "@/images/cat-dog.jpg"
import { Button, Stack, Link, TextField, Typography, Grid, FormControl, InputLabel, SelectChangeEvent, Select, MenuItem, ToggleButtonGroup, ToggleButton } from "@mui/material";
import styles from "./home.module.scss"
import { useState } from 'react';

export default function Navbar() {


    return (
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="left">
                <Link href="/" underline='none' color="inherit">
                    <Typography variant="h4" textAlign="center">
                        Taily
                    </Typography>
                </Link>
                <Link href="/mascotas" underline="hover">Mascotas</Link>
                <Link href="/citas" underline="hover">Citas</Link>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="right">
                <Link href="/login" underline="hover">Iniciar sesión</Link>
                <Link href="/registro" underline="hover">Registrarme</Link>
            </Stack>
        </Stack>
    )
}