import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbar,
  gridFilteredSortedRowIdsSelector,
  selectedGridRowsSelector,
} from "@mui/x-data-grid";
import InventoryDetailsView from "./InventoryDetailsView";
import { Row, Card, Button } from 'react-bootstrap';

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

const InventoryHistory = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [selectedInventory, setSelectedInventory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/inventory");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("data: ", data);
        setInventoryItems(data.payload);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchData();
  }, []);

  // Define columns for DataGrid
  const columns = [
    //{ field: "refId", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "unitOfMeasure", headerName: "Unit of Measure", width: 150 },
    { field: "avaQuantity", headerName: "Available Quantity", width: 200 },
    { field: "rop", headerName: "Reorder Point", width: 150 },
    { field: "unitPrice", headerName: "Unit Price", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "expDate", headerName: "Expiry Date", width: 150 },
    // supInfo fields here
    // { field: "supInfo.name", headerName: "Supplier Name", width: 200 },
    // { field: "supInfo.phone", headerName: "Supplier Phone", width: 150 },
    // { field: "supInfo.email", headerName: "Supplier Email", width: 200 },
    // { field: "supInfo.notes", headerName: "Supplier Notes", width: 200 },
  ];

  const handleRowClick = (params) => {
    setSelectedInventory(params.row);
  };

  const getRowId = (row) => row.refId;

  return (
    <div>
    <section className="container mt-5 mb-3">
      <Row>
        <h4 className="text-center">
          <span className="product-color gap-2">
            <span className="logo-text">CRYSTAL</span> Animal Hospital
          </span>
           <span className="gap-2 ">
        <br /> Inventory Details
     </span>
      </h4>
    </Row>
    <hr />
    </section>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={inventoryItems}
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
      {selectedInventory && (
        <InventoryDetailsView
          inventory={selectedInventory}
          onClose={() => setSelectedInventory(null)}
        />
      )}
    </div>
  );
};

export default InventoryHistory;