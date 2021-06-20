import "./style.css"

function Search() {
    return (
        <div className="input-group mb-3 search-bar">
            <input type="text" className="form-control" placeholder="Search by first name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    )
};

export default Search;