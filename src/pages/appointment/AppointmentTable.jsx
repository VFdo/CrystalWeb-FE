import { useState , useEffect} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';

const styles = {
    tableContainer: {
        margin: 16,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', 
      },
}

const columns = [
  { id: 'petRefId', label: 'Pet ID', minWidth: 75 },
  { id: 'clientRefId', label: 'Client ID', minWidth: 75 },
  { id: 'billRefId', label: 'Bill ID', minWidth: 75 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'time', label: 'Time', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'notes', label: 'Notes', minWidth: 170 },




  // ***** FOR FUTURE REFERENCE *****
  // {
  //   id: 'population',
  //   label: 'Population',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toLocaleString('en-US'),
  // },
  // {
  //   id: 'size',
  //   label: 'Size\u00a0(km\u00b2)',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toLocaleString('en-US'),
  // },
  // {
  //   id: 'density',
  //   label: 'Density',
  //   minWidth: 170,
  //   align: 'right',
  //   format: (value) => value.toFixed(2),
  // },
];

const AppointmentTable = () => {
    const [rows, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
      const fetchAllAppointments = async () => {
        try{
          console.log('Fetching data...');
          const res = await fetch('http://localhost:8080/appointment');
          if (!res.ok) {
            throw new Error('Failed to fetch appointments');
          }
          const appointmentData = await res.json();
          console.log('data: ', appointmentData);
          setData(appointmentData);
        }catch (error) {
          console.error('Error fetching appointments:', error);
        }
      };
      fetchAllAppointments();
    }, []);
    

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={styles.tableContainer}>
        <Paper sx={{ width: '80%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    </Grid>
    );
};

export default AppointmentTable;


