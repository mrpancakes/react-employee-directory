import React, { Component } from "react";
import DataTable from "./DataTable/index";
import API from "../utils/API";

class EmployeeResultsContainer extends Component {
    state = {
        employees: "",
        results: []
    };

    componentDidMount() {
        this.loadEmployees();
    };

    loadEmployees = () => {
        API.fetchEmployees()
            .then(res => {
                this.setState({ results: res.data.results });
                console.log(this.state.results);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <DataTable results={this.state.results} />
        )
    }
};

export default EmployeeResultsContainer;