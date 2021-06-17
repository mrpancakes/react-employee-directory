import React, { Component } from "react";
import API from "../utils/API";
import { directive } from "@babel/types";

class EmployeeResults extends Component {
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
            console.log(res);
            // this.setState({ results: res.data.data });
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                Sample text for now
            </div>
        )
    }
};

export default EmployeeResults;