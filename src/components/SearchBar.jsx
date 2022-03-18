import { Form, FormControl } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <Form inline>
      <FormControl
        style={{ width: "300px" }}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
    </Form>
  );
};

export default SearchBar;
