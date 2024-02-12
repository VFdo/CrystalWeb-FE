import React, { useState, useEffect } from 'react';
import {
  DataGrid,
  GridToolbar,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
} from '@mui/x-data-grid';

const styles = {
  tableContainer: {
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const getSelectedRowsToExport = ({ apiRef }) => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};

const AttendanceHistory = () => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/attendance');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('data: ', data);
        setAttendanceHistory(data.payload);
      } catch (error) {
        console.error('Error fetching attendance history:', error);
      }
    };

    fetchData();
  }, []);

  // Define columns for DataGrid
  const columns = [
    { field: 'refId', headerName: 'Reference ID', width: 200 },
    { field: 'inTime', headerName: 'In Time', width: 200 },
    { field: 'outTime', headerName: 'Out Time', width: 200 },
    { field: 'overTimeHours', headerName: 'Overtime Hours', width: 200 },
    { field: 'notes', headerName: 'Notes', width: 200 },
  ];

  const getRowId = (row) => row.refId;

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={attendanceHistory}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          getRowId={getRowId}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: { printOptions: { getRowsToExport: getSelectedRowsToExport } },
          }}
        />
      </div>
    </div>
  );
};

export default AttendanceHistory;

