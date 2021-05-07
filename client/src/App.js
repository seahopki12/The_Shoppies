import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchCard from "./components/SearchCard/index.js";
import ResultsCard from "./components/ResultsCard/index.js";
import NomCard from "./components/NomCard/index.js";
import NominationAlert from "./components/NominationAlert/index.js";
import { StoreProvider } from "./utils/GlobalState";

function App() {

  return (
    <div>
      <StoreProvider>
        <Navbar fixed="tight" bg="light">
          <Navbar.Brand>The Shoppies</Navbar.Brand>
          <NominationAlert />
        </Navbar>
        <Container fluid>
          <SearchCard />
          <Row>
            <ResultsCard />
            <NomCard />
          </Row>
        </Container>
      </StoreProvider>
    </div>
  );
}

export default App;
