import Image from 'next/image'
import { Card, CardContent, Stack, Typography } from "@mui/material";

import styles from "./treatment-card.module.scss"
import MedicineImg from "@/images/medicine.png"

type Props = {
    treatment: {
        pet: string,
        medicine: string,
        dose: string,
        frequencyHours: number,
        startDate: string,
        endDate: string,
    }
}

export default function TreatmentCard({ treatment }: Props) {

    return (
        <Card className={styles.container}>
            <CardContent>
                <Stack direction="row" spacing={2} minWidth="400px" maxWidth="100%">
                    <figure className={styles.schedule}>
                        <Image
                            src={MedicineImg}
                            alt="Medicine"
                            width={50}
                            height={50}
                        />
                    </figure>
                    <Stack>
                        <Typography variant="h5">
                            {treatment.medicine}
                        </Typography>
                        <Typography variant="subtitle1">
                            {treatment.dose} | Cada {treatment.frequencyHours} horas
                        </Typography>
                        <Typography variant="subtitle1" color="gray">
                            Empieza {treatment.startDate} | Finaliza {treatment.startDate}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}