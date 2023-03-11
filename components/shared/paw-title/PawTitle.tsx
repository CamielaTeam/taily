import Image from 'next/image'
import PawImg from "@/images/paw.svg"
import { Stack, Typography } from "@mui/material";
import styles from "./paw-title.module.scss"

type Props = {
    title: string
}

export default function PawTitle({ title }: Props) {

    return (
        <Stack direction="row" className={styles.container}>
            <figure >
                <Image
                    src={PawImg}
                    alt="PawImg"
                    width={200}
                    height={200}
                />
            </figure>
            <Typography variant="h4" textAlign="center">
                {title}
            </Typography>
        </Stack>
    )
}