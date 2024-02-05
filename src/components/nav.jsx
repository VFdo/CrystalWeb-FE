import Button from 'react-bootstrap/Button';
import "../App.css";
import Form from 'react-bootstrap/Form';

const nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleInputChange}
              value={query}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      
    </nav>
  );
};

export default nav;