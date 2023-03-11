import Image from 'next/image'
import PinkCat from "@/images/pink-cat.jpg"
import { Link, Stack, Typography, Button } from "@mui/material";
import styles from "./add-pet.module.scss"

export default function AddPetSuccess() {


    return (
        <Stack spacing={2} sx={{ height: "100%" }} padding={4}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="left">
                <Typography variant="h2" textAlign="center">
                    Taily
                </Typography>
            </Stack>
            <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }} maxWidth="500px" alignSelf="center" className={styles.content}>
                <figure className={styles.pet}>
                    <Image
                        src={PinkCat}
                        alt="PinkCat"
                    />
                </figure>
                <Typography variant="h5" textAlign="center">
                    Felicidades
                </Typography>
                <Typography variant="h5" textAlign="center">
                    Has registrado a Chloe
                </Typography>
                <Link href="/inicio">
                    <Button variant="contained" fullWidth>Continuar</Button>
                </Link>
                <Link href="/agregar-mascota">Añadir otra mascota</Link>
            </Stack>
        </Stack>
    )
}