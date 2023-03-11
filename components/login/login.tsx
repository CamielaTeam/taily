import Image from 'next/image'
import { Button, Grid, Link, Stack, TextField, Typography } from "@mui/material";

import LoginImg from "@/images/login.png"
import styles from "./login.module.scss"

export default function Login() {
    return (
        <Grid container spacing={2} className={styles.container}>
            <Grid item xs={7}>
                <figure>
                    <Image
                        src={LoginImg}
                        alt="Login"

                    />
                </figure>
            </Grid>
            <Grid item xs={5}>
                <Stack spacing={2} sx={{ height: "100%" }} padding={4}>
                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="right">
                        <div>
                            ¿Aún no tienes cuenta?
                        </div>
                        <Link href="/registro">Registrarte</Link>
                    </Stack>
                    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }} maxWidth="300px" alignSelf="center">
                        <Stack alignItems="center">
                            <Typography variant="h5" textAlign="center">
                                Estamos felices de verte nuevamente
                            </Typography>
                            <Typography variant="h6" >
                                Inicia sesión
                            </Typography>
                        </Stack>

                        <TextField id="standard-basic" label="Correo" variant="standard" fullWidth />
                        <TextField id="standard-basic" label="Contraseña" variant="standard" fullWidth />
                        <Link href="/agregar-mascota" width="100%">
                            <Button variant="contained" fullWidth>Ingresar</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}