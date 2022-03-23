import { Form, FormControl } from "react-bootstrap";

const SearchBar = (props) => {
  // STATE
  return (
    <Form inline className="justify-content-center">
      <FormControl
        style={{ width: "300px" }}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={props.searchQuery}
        onChange={(e) => {
          if (e.key === "Enter") {
            props.state(e.target.value);
          }
        }}
      />
    </Form>
  );
};

export default SearchBar;
