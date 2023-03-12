import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

type Props = {
    appointments: {
        id: string;
        date: string;
        hour: string;
        place: string;
        status: string;
        pet: string;
    }[]
}

export default function AppointmentsTable({ appointments }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell align="right">Hora</TableCell>
                        <TableCell align="right">Lugar</TableCell>
                        <TableCell align="right">Mascota</TableCell>
                        <TableCell align="right">Estado</TableCell>
                        <TableCell align="right">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.hour}</TableCell>
                            <TableCell align="right">{row.place}</TableCell>
                            <TableCell align="right">{row.pet}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right" ><RemoveRedEyeIcon color="primary" /><DeleteIcon color="primary" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}