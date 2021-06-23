import React, { Component } from "react";
import DataTable from "../DataTable/index";
import SearchBar from "../SearchBar";
import API from "../../utils/API"

class EmployeeResultsContainer extends Component {
    state = {
        search: "",
        results: [],
    };

    componentDidMount() {
        this.loadEmployees();
    };

    loadEmployees = () => {
        API.fetchEmployees()
            .then(res => {
                this.setState({
                    results: res.data.results,
                });
                // console.log(this.state.results);
            })
            .catch(err => console.log(err));
    };


    handleInputChange = (event => {
        const value = event.target.value;
        this.setState({ search: value.toLowerCase() });
    });

    handleFormSubmit = (event => {
        event.preventDefault();
    });

    firstNameSort = () => {
        const resultCopy = [...this.state.results];
        resultCopy.sort((a, b) => {
            if (a.name.first > b.name.first) {
                return 1;
            } else if (a.name.first < b.name.first) {
                return -1;
            } else {
                return 0;
            }
        });
        this.setState({ results: resultCopy });
    }

    searchByName = () => {
        const resultCopy = [...this.state.results];
        const filteredResults = resultCopy.filter(person => {
            return person.name.first.toLowerCase().includes(this.state.search);
        })
        return filteredResults;
    }


    render() {
        const filtered = this.searchByName();
        return (
            <>
                <SearchBar
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <DataTable
                    results={filtered}
                    sort={this.firstNameSort}
                />
            </>
        )
    }
};

export default EmployeeResultsContainer;