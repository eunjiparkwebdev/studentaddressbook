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
      "https://raw.githubusercontent.com/eunjiparkwebdev/studentaddressbook/main/src/students.json"
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
      <h1 className="app-title">Search Student</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search students"
        className="students-search-box"
      />
      <CardList students={filteredStudents} />

      {/* <div className="card-list">
        {filteredStudents.map((student) => (
          <div className="card-container" key={student.id}>
            <img
              src={
                student.imageUrl === "" &&
                `http://robohash.org/${student.id}?set=set4&size=180x180`
              }
              alt={`student ${student.name}`}
            ></img>
            <h2>{student.name}</h2>
            <p>{student.email}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default App;
