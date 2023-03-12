import Image from 'next/image'
import { Card, CardContent, Stack, Typography } from "@mui/material";

import styles from "./appointment-card.module.scss"
import ScheduleImg from "@/images/schedule.png"

type Props = {
    appointment: {
        name: string,
        pet: string,
        doctor: string,
        date: string,
        hour: string
    }
}

export default function AppointmentCard({ appointment }: Props) {

    return (
        <Card className={styles.container}>
            <CardContent>
                <Stack direction="row" spacing={2} minWidth="300px" maxWidth="100%">
                    <figure className={styles.schedule}>
                        <Image
                            src={ScheduleImg}
                            alt="PinkCat"
                            width={50}
                            height={50}
                        />
                    </figure>
                    <Stack>
                        <Typography variant="h5">
                            {appointment.name}
                        </Typography>
                        <Typography variant="subtitle1">
                            {appointment.doctor}
                        </Typography>
                        <Typography variant="subtitle1" color="gray">
                            {appointment.date} | {appointment.hour}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}