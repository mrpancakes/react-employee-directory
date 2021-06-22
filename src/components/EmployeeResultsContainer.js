import React, { Component } from "react";
import DataTable from "./DataTable/index";
import SearchBar from "./SearchBar";
import API from "../utils/API";

class EmployeeResultsContainer extends Component {
    state = {
        search: "",
        results: [],
        filteredResults: [],
    };

    componentDidMount() {
        this.loadEmployees();
    };

    loadEmployees = () => {
        API.fetchEmployees()
            .then(res => {
                this.setState({ 
                    results: res.data.results,
                    filteredResults: res.data.results
                 });
                // console.log(this.state.results);
            })
            .catch(err => console.log(err));
    };


    handleInputChange = (event => {
        const value = event.target.value;
        this.setState({ search: value });
        this.searchByName(value.toLowerCase());
    });

    handleFormSubmit = (event => {
        event.preventDefault();
    });

    searchByName = input => {
        if (input) {
            this.setState({
                filteredResults: this.state.results.filter(person => {
                    return person.name.first.toLowerCase().includes(input);
                })
            });
            console.log(this.state.filteredResults)
        } else {
            this.setState({ filteredResults: this.state.results })
        };
    }

    render() {
        return (
            <>
                <SearchBar 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <DataTable 
                    results={this.state.filteredResults}
                />
            </>
        )
    }
};

export default EmployeeResultsContainer;