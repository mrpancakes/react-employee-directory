import React, { Component } from "react";
import ResultRows from "./TableRows";
import API from "../utils/API";
// import "../styles/Main.css";

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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Empl ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <ResultRows results={this.state.results} />
            </table>
        )
    }
};

export default EmployeeResultsContainer;