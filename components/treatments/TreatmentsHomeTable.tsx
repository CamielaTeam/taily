import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    medicine: string,
    dosis: string,
    frequence: string,
) {
    return { name, medicine, dosis, frequence };
}

const rows = [
    createData('Tail', "Hemolitan", "0.1ml", "Diaria"),
    createData('Tail', "Meloxican", "0.2ml", "Cada 8 horas"),
    createData('Chloe', "Hemolitan", "0.1ml", "Cada 12 horas"),
    createData('Tail', "Prednisolona", "1 tableta", "Cada 12 horas"),
    createData('Tail', "Hemolitan", "0.1ml", "Cada 12 horas"),
];

export default function TreatmentsTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>Mascota</TableCell>
                        <TableCell align="right">Medicina</TableCell>
                        <TableCell align="right">Dosis</TableCell>
                        <TableCell align="right">Frecuencia</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.medicine}</TableCell>
                            <TableCell align="right">{row.dosis}</TableCell>
                            <TableCell align="right">{row.frequence}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}