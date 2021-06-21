import "./style.css"

function SearchBar(props) {
    return (
        <div className="text-center">
            <form className="col" onSubmit={props.handleFormSubmit}>
                <input
                    className="form-control"
                    value={props.value}
                    name="search"
                    onChange={props.handleInputChange}
                    type="search"
                    placeholder="Search"
                />
            </form>
        </div>
    )
};

export default SearchBar;