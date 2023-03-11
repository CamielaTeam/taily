import Image from 'next/image'
import CatDog from "@/images/cat-dog.jpg"
import { Button, Stack, Link, TextField, Typography, Grid, FormControl, InputLabel, SelectChangeEvent, Select, MenuItem, ToggleButtonGroup, ToggleButton } from "@mui/material";
import styles from "./home.module.scss"
import { useState } from 'react';

export default function Navbar() {


    return (
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="left">
            <Link href="/mascotas">
                <Typography variant="h4" textAlign="center">
                    Taily
                </Typography>
            </Link>
            <Link href="/mascotas">Mascotas</Link>
            <Link href="/mascotas">Mascotas</Link>
            <Link href="/mascotas">Mascotas</Link>
        </Stack>
    )
}