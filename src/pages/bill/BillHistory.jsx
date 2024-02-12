import React, { useState, useEffect } from "react";
import {
    DataGrid,
    GridToolbar,
    gridFilteredSortedRowIdsSelector,
    selectedGridRowsSelector,
  } from '@mui/x-data-grid';
import BillDetailsView from "./BillDetailsView";

const styles = {
  tableContainer: {
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
};

const getSelectedRowsToExport = ({ apiRef }) => {
  const selectedRowIds = selectedGridRowsSelector(apiRef);
  if (selectedRowIds.size > 0) {
    return Array.from(selectedRowIds.keys());
  }

  return gridFilteredSortedRowIdsSelector(apiRef);
};

const BillHistory = () => {
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/bill");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("data: ", data);
        setBills(data.payload);
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    };

    fetchData();
  }, []);

  // Define columns for DataGrid
  const columns = [
    { field: "refId", headerName: "Reference ID", width: 200 },
    { field: "dateTime", headerName: "Date Time", width: 200 },
    { field: "clientId", headerName: "Client Ref ID", width: 200 },
    { field: "employeeId", headerName: "Employee Ref ID", width: 200 },
    { field: "itemsList", headerName: "Items", width: 200 },
    { field: "servicesList", headerName: "Services", width: 200 },
    { field: "additionalCharge", headerName: "Additional Charge", width: 200 },
    { field: "totalPrice", headerName: "Total Price", width: 200 },
    { field: "paymentType", headerName: "Payment Type", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "notes", headerName: "Notes", width: 200 },
  ];

  const handleRowClick = (params) => {
    setSelectedBill(params.row);
  };

  const getRowId = (row) => row.dateTime;

  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={bills}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          getRowId={getRowId}
          onRowClick={handleRowClick}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              printOptions: { getRowsToExport: getSelectedRowsToExport },
            },
          }}
        />
      </div>
      {selectedBill && (
        <BillDetailsView
          bill={selectedBill}
          onClose={() => setSelectedBill(null)}
        />
      )}
    </div>
  );
};

export default BillHistory;
