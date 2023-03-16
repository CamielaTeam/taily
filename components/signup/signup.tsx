import Image from 'next/image'
import { Button, Grid, Link, Stack, TextField, Typography } from "@mui/material";

import LoginImg from "@/images/login.png"
import styles from "./signup.module.scss"

export default function Signup() {
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
                            ¿Ya tienes cuenta?
                        </div>
                        <Link href="/login">Inicia sesión</Link>
                    </Stack>
                    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }} maxWidth="300px" alignSelf="center">
                        <Stack alignItems="center">
                            <Typography variant="h5" textAlign="center">
                                Te  ayudaremos a cuidar de tu mascota
                            </Typography>
                            <Typography variant="h6" >
                                Registrarme
                            </Typography>
                        </Stack>
                        <TextField id="standard-basic" label="Nombre" variant="standard" fullWidth />
                        <TextField id="standard-basic" label="Correo" variant="standard" fullWidth type="email" />
                        <Stack direction="row" spacing={2} >
                            <TextField id="signup-password" label="Contraseña" variant="standard" fullWidth type="password" />
                            <TextField id="signup-password" label="Repite contraseña" variant="standard" fullWidth type="password" />
                        </Stack>
                        <Link href="/agregar-mascota" width="100%">
                            <Button variant="contained" fullWidth>Registrarme</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}