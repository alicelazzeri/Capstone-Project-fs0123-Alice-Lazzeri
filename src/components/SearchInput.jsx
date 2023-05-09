import { useState } from "react";
import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

const SearchInput = () => {
  const [filter, setFilter] = useState("book");
  const [query, setQuery] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // if (filtro === "book") {
    //   dispatch(getQueryJobFetch("book", query));
    // } else if (filtro === "author") {
    //   dispatch(getQueryJobFetch("author", query));
    // } else if (filtro === "category") {
    //   dispatch(getQueryJobFetch("category", query));
    // }
    // console.log("submit");
    // navigate("/jobs");
  };

  return (
    <div className="inputContainer">
      <InputGroup className="searchInput mb-3 mx-auto">
        <Form.Control
          onSubmit={handleSubmit}
          aria-label="Text input with dropdown button"
          className="inputBar"
          type="text"
          placeholder={`Search ${filter}`}
          defaultValue={query}
          onChange={e => {
            setQuery(e.target.value);
            console.log(e.target.value);
          }}
        />

        <DropdownButton className="searchBtn" title={filter} id="input-group-dropdown-2" align="end">
          <Dropdown.Item className="dropdownItem" onClick={() => setFilter("book")}>
            Book
          </Dropdown.Item>
          <Dropdown.Item className="dropdownItem" onClick={() => setFilter("author")}>
            Author
          </Dropdown.Item>
          <Dropdown.Item className="dropdownItem" onClick={() => setFilter("category")}>
            Category
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div>
  );
};

export default SearchInput;

// <div className="d-flex justify-content-center align-items-center">
//   <Form className="my-3" onSubmit={handleSubmit}>
//     <Form.Group>
//       <Form.Control
//         className="inputBar"
//         type="text"
//         placeholder={`Search ${filter}`}
//         defaultValue={query}
//         onChange={e => {
//           setQuery(e.target.value);
//           console.log(e.target.value);
//         }}
//       />
//     </Form.Group>
//   </Form>
//   <Dropdown className="mt-0 ms-2 searchBtn">
//     <Dropdown.Toggle className="searchBtn" id="dropdown-basic">
//       {filter}
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//       <Dropdown.Item>
//         {" "}
//         <button className="dropdownItem" onClick={() => setFilter("book")}>
//           Book
//         </button>
//       </Dropdown.Item>
//       <Dropdown.Item>
//         <button className="dropdownItem" onClick={() => setFilter("author")}>
//           Author
//         </button>
//       </Dropdown.Item>
//       <Dropdown.Item>
//         <button className="dropdownItem" onClick={() => setFilter("category")}>
//           Category
//         </button>
//       </Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
// </div>