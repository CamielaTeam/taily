import Image from 'next/image'
import { Card, CardContent, Stack, Typography } from "@mui/material";

import styles from "./appointment-card.module.scss"
import ScheduleImg from "@/images/schedule.png"

type Props = {
    appointment: {
        id: string,
        date: string,
        hour: string,
        place: string,
        status: string,
        pet: string,
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
                            Cita médica
                        </Typography>
                        <Typography variant="subtitle1">
                            {appointment.place}
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