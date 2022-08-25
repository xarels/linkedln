import React, {useState} from "react";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    props.Data.filter((person) => {
      return person.name.match(searchInput);
    });
  }
  
  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {props.data.map((index, person) => {
          <div>
            <tr>
              <td>{person.name}</td>
              <td>{person.email}</td>
            </tr>
          </div>;
        })}
      </table>
    </div>
  );
};
export default SearchBar;
