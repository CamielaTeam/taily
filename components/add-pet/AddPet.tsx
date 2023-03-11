import Image from 'next/image'
import CatDog from "@/images/cat-dog.jpg"
import { Button, Stack, Link, TextField, Typography, Grid, FormControl, InputLabel, SelectChangeEvent, Select, MenuItem, ToggleButtonGroup, ToggleButton } from "@mui/material";
import styles from "./add-pet.module.scss"
import { useState } from 'react';

export default function AddPet() {
    const [pet, setPet] = useState('');
    const [years, setYears] = useState('');
    const [months, setMonths] = useState('');


    const [alignment, setAlignment] = useState('female');


    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };


    return (
        <Stack spacing={2} sx={{ height: "100%" }} padding={4}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="left">
                <Typography variant="h2" textAlign="center">
                    Taily
                </Typography>
            </Stack>
            <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }} maxWidth="500px" alignSelf="center">
                <Stack alignItems="center">
                    <Typography variant="h5" textAlign="center">
                        Ahora registremos a tu mascota
                    </Typography>
                </Stack>
                <Grid container spacing={2} className={styles.content}>
                    <Grid item xs={3}>
                        <figure>
                            <Image
                                src={CatDog}
                                alt="CatDog"
                            />
                        </figure>
                    </Grid>
                    <Grid item xs={7} spacing={4}>
                        <Stack spacing={2} >
                            <FormControl variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-standard-label">¿Qué mascota tienes?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={pet}
                                    onChange={(e) => { setPet(e.target.value); }}
                                    label="¿Qué mascota tienes?"
                                >
                                    <MenuItem value="cat">Gato</MenuItem>
                                    <MenuItem value="dog">Perro</MenuItem>
                                    <MenuItem value="rabbit">Conejo</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="standard-basic" label="Nombre de tu mascota" variant="standard" fullWidth />
                            <Stack direction="row" spacing={2} alignItems="center" >
                                <TextField
                                    type="number"
                                    id="outlined-basic"
                                    label="Años"
                                    InputProps={{ inputProps: { min: 0, max: 12 } }}
                                    variant="standard"
                                    onChange={(e) => {
                                        if (Number(e.target.value) > 0 && Number(e.target.value) <= 12) {
                                            setYears(e.target.value)
                                        }
                                    }}
                                    value={years}
                                />
                                <TextField
                                    type="number"
                                    id="outlined-basic"
                                    label="Meses"
                                    InputProps={{ inputProps: { min: 0, max: 12 } }}
                                    variant="standard"
                                    onChange={(e) => {
                                        if (Number(e.target.value) > 0 && Number(e.target.value) <= 12) {
                                            setMonths(e.target.value)
                                        }
                                    }}
                                    value={months}
                                />
                            </Stack>
                            <InputLabel size="small" sx={{ fontSize: "1rem" }}>Género</InputLabel>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton value="female">Hembra</ToggleButton>
                                <ToggleButton value="male">Macho</ToggleButton>
                            </ToggleButtonGroup>
                            <Link href="/mascota-agregada">
                                <Button variant="contained" fullWidth>Añadir mascota</Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>

            </Stack>
        </Stack>
    )
}