import EmployeeResultsContainer from "./components/EmployeeResultsContainer";
import Header from "./components/Header/index";
import Search from "./components/SearchBar/index"
import "./styles/Main.css";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <EmployeeResultsContainer />
    </div>
  );
}

export default App;
