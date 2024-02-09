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

const EmployeeHistory = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/employee');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('data: ', data);
        setEmployees(data.payload);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchData();
  }, []);

  // Define columns for DataGrid
  const columns = [
    { field: 'employeeName', headerName: 'Name', width: 200 },
    { field: 'employeeNIC', headerName: 'NIC', width: 150 },
    { field: 'employeeRoleId', headerName: 'Role', width: 150 },
    { field: 'employeeDob', headerName: 'Date of Birth', width: 150 },
    { field: 'employeeBasicSalary', headerName: 'Basic Salary', width: 150 },
    { field: 'employeeRequiredDailyHours', headerName: 'Required Daily Hours', width: 200 },
    { field: 'employeeHourlyPay', headerName: 'Hourly Pay', width: 150 },
  ];

  const getRowId = (row) => row.refId;

  return (
    <div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={employees}
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

export default EmployeeHistory;
