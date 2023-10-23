import React, { Component } from "react";
import "./table-styles.css";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from "@material-ui/core";
import { confirmAlert } from "react-confirm-alert";

const api = axios.create({
  baseURL: 'http://localhost:8080/pet'
});

export default class TableComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      count: 1,
      rowsPerpage: 10,
      sortOrder: {},
      isLoading: false,
      data: [],
      editData: [],
      equipment: []
    };

    //handler
    this.handleAddBtn = this.handleAddBtn.bind(this);
  }

  componentDidMount() {
    // this.setState({ isLoading: true });
    // api
    //   .get(
    //     `/equipment?pageNumber=${this.state.page}&pageSize=${this.state.rowsPerpage}`
    //   )
    //   .then((res) => {
    //     this.setState({
    //       data: res.data.data,
    //       isLoading: false,
    //       page: res.data.pageNumber,
    //       count: res.data.totalRecords
    //     });
    //     console.log("data: " + JSON.stringify(res.data.totalRecords));
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    this.getData();
  }

  getData = () => {
    this.setState({
      ...this.state,
      data: this.getDateSrc()[0].data,
      isLoading: false,
      page: this.getDateSrc()[0].pageNumber,
      count: this.getDateSrc()[0].totalRecords
    });
  };

  //Example of the data that is return from my local API
  getDateSrc = () => {
    return [
      {
        pageNumber: 1,
        pageSize: 10,
        firstPage: null,
        lastPage: null,
        totalPages: 0,
        totalRecords: 14,
        nextPage: null,
        previousPage: null,
        data: [
          {
            "id": 1,
            "name": "Fluffy",
            "dob": "2019-05-15T00:00:00",
            "typeOfAnimal": "Cat",
            "picturePath": null,
            "status": "Sick",
            "dateAdded": "2022-01-10T00:00:00",
            "maintenances": []
          },
          {
            "id": 2,
            "name": "Rex",
            "dob": "2020-03-20T00:00:00",
            "typeOfAnimal": "Dog",
            "picturePath": null,
            "status": "Healthy",
            "dateAdded": "2022-04-05T00:00:00",
            "maintenances": []
          },
          {
            "id": 3,
            "name": "Whiskers",
            "dob": "2018-11-12T00:00:00",
            "typeOfAnimal": "Cat",
            "picturePath": null,
            "status": "Sick",
            "dateAdded": "2022-02-18T00:00:00",
            "maintenances": []
          },
          {
            "id": 4,
            "name": "Buddy",
            "dob": "2019-08-05T00:00:00",
            "typeOfAnimal": "Dog",
            "picturePath": null,
            "status": "Healthy",
            "dateAdded": "2022-03-10T00:00:00",
            "maintenances": []
          },
          {
            "id": 5,
            "name": "Nibbles",
            "dob": "2020-07-25T00:00:00",
            "typeOfAnimal": "Rabbit",
            "picturePath": null,
            "status": "Sick",
            "dateAdded": "2022-05-15T00:00:00",
            "maintenances": []
          },
          {
            "id": 6,
            "name": "Tigger",
            "dob": "2017-02-28T00:00:00",
            "typeOfAnimal": "Cat",
            "picturePath": null,
            "status": "Sick",
            "dateAdded": "2022-01-25T00:00:00",
            "maintenances": []
          },
          {
            "id": 7,
            "name": "Max",
            "dob": "2019-04-10T00:00:00",
            "typeOfAnimal": "Dog",
            "picturePath": null,
            "status": "Healthy",
            "dateAdded": "2022-03-01T00:00:00",
            "maintenances": []
          },
          {
            "id": 8,
            "name": "Cotton",
            "dob": "2020-06-08T00:00:00",
            "typeOfAnimal": "Rabbit",
            "picturePath": null,
            "status": "Sick",
            "dateAdded": "2022-05-20T00:00:00",
            "maintenances": []
          },
          {
            "id": 9,
            "name": "Luna",
            "dob": "2018-12-14T00:00:00",
            "typeOfAnimal": "Cat",
            "picturePath": null,
            "status": "Sick",
            "dateAdded": "2022-01-15T00:00:00",
            "maintenances": []
          },
          {
            "id": 10,
            "name": "Rocky",
            "dob": "2019-09-30T00:00:00",
            "typeOfAnimal": "Dog",
            "picturePath": null,
            "status": "Healthy",
            "dateAdded": "2022-04-20T00:00:00",
            "maintenances": []
          }
        ]
        ,
        succeeded: true,
        errors: null,
        message: null
      }
    ];
  };

  changePage = (page) => {
    this.setState({ isLoading: true });

    api
      .get(`/equipment?pageNumber=${page}&pageSize=${this.state.rowsPerpage}`)
      .then((res) => {
        this.setState({
          data: res.data.data,
          isLoading: false,
          page: res.data.pageNumber,
          count: res.data.totalRecords
        });
        console.log("data: " + res.data.data);
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          data: this.getDateSrc()[page].data,
          isLoading: false,
          page: this.getDateSrc()[page].pageNumber,
          count: this.getDateSrc()[page].totalRecords
        });
      });
  };

  sort = (page) => {
    this.setState({ isLoading: true });

    api
      .get(`/equipment?pageNumber=${page}&pageSize=${this.state.rowsPerpage}`)
      .then((res) => {
        this.setState({
          data: res.data.data,
          isLoading: false,
          page: res.data.pageNumber,
          count: res.data.totalRecords
        });
        console.log("data: " + res.data.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  delete(dataIndex) {
    let equipment = this.state.data[dataIndex];

    confirmAlert({
      title: "",
      message: "Do you really want to do this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            api
              .delete("/equipment/" + equipment.id)
              .then((res) => {
                window.location.reload();
              })
              .catch((error) => {
                alert(error);
              });
          }
        },
        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  }

  handleAddBtn() {
    this.setState({ addComposeModal: true });
  }

  render() {
    const columns = [
      {
        name: "Delete",
        options: {
          filter: false,
          sort: false,
          empty: true,

          customBodyRenderLite: (dataIndex) => {
            return (
              <i
                className="fa fa-trash"
                aria-hidden="true"
                id="deleteIcon"
                onClick={() => {
                  this.delete(dataIndex);
                }}
              />
            );
          }
        }
      },
      {
        name: "Edit",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRenderLite: (dataIndex) => {
            const val = dataIndex;
            return (
              <i
                className="fa fa-pencil-square-o"
                aria-hidden="true"
                id="editIcon"
                onClick={() => {
                  const data = this.state.data[val];
                  this.setState({ editData: data, editShow: true });
                }}
              />
            );
          }
        }
      },
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => {
            return <span>{this.state.data[dataIndex].name}</span>;
          }
        }
      },
      {
        name: "typeOfAnimal",
        label: "Pet Type",
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => {
            return <span>{this.state.data[dataIndex].typeOfAnimal}</span>;
          }
        }
      },
      {
        name: "status",
        label: "State",
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => {
            const state = this.state.data[dataIndex].status;
            if (state === "Healthy") {
              return (
                <div className="operating">
                  <span>{state}</span>
                </div>
              );
            } else {
              return (
                <div className="maintenance">
                  <span>{state}</span>
                </div>
              );
            }
          }
        }
      },
      {
        name: "dob",
        label: "Date of Birth",
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => {
            return <span>{this.state.data[dataIndex].dob}</span>;
          }
        }
      },
      {
        name: "dateAdded",
        label: "Date Added",
        options: {
          filter: true,
          customBodyRenderLite: (dataIndex) => {
            return <span>{this.state.data[dataIndex].dateAdded}</span>;
          }
        }
      }
    ];

    const { data, count, isLoading, rowsPerpage } = this.state;

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "vertical",
      download: false,
      serverSide: true,
      print: false,
      count: count,
      rowsPerpage: rowsPerpage,
      rowsPerPageOptions: [],
      selectableRowsHideCheckboxes: false,
      selectableRows: "none",
      selectableRowsHeader: false,
      onColumnSortChange: (changedColumn, direction) =>
        console.log("changedColumn: ", changedColumn, "direction: ", direction),
      onChangeRowsPerPage: (numberOfRows) =>
        console.log("numberOfRows: ", numberOfRows),
      onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
      onTableChange: (action, tableState) => {
        console.log(action, tableState);

        switch (action) {
          case "changePage":
            this.changePage(tableState.page);
            break;
          case "sort":
            this.sort(tableState.page);
            break;
          default:
            console.log("action not handled.");
        }
      }
    };

    return (
      <div className="home">
        <div className="btnContainer">
          <span>New Equipment</span>
          <i
            id="addIcon"
            className="fa fa-plus-circle"
            aria-hidden="true"
            onClick={this.handleAddBtn}
          ></i>
        </div>
        <MUIDataTable
          title={
            <Typography variant="h6">
              List of Equipments
              {isLoading && (
                <CircularProgress
                  size={24}
                  style={{ marginLeft: 15, position: "relative", top: 4 }}
                />
              )}
            </Typography>
          }
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}
