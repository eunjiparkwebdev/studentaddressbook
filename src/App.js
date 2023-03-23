import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/searchbox/searchbox.component";

const App = () => {
  const [students, setStudents] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/eunjiparkwebdev/studentaddressbook/main/public/students.json"
    )
      .then((response) => response.json())
      .then((students) => setStudents(students));
  }, []);

  useEffect(() => {
    const newFilteredStudents = students.filter((student) => {
      return student.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredStudents(newFilteredStudents);
    console.log(newFilteredStudents);
  }, [students, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Let's see who's in Michael's class!</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search students"
        className="students-search-box"
      />
      <CardList students={filteredStudents} />
    </div>
  );
};
export default App;
