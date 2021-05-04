import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import './App.css';

function App() {
  return (
    <div>
      <Navbar fixed="tight" bg="light">
        <Navbar.Brand>The Shoppies</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Col>
          <Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control type="search" placeholder="Search movie" />
            </Form.Group>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
