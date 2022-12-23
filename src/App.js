import "./App.css";
import FaucetToken from "./constants/FaucetToken.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Faucet from "./components/Faucet";

function App() {
  const Token = FaucetToken;

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          {/* <Col>
            <div>Goerli Token Faucet</div>
          </Col> */}
          {/* <Col>
            <div> our send area</div>
          </Col> */}
        </Row>
        <Faucet tokenContract={Token} />
      </Container>
    </div>
  );
}

export default App;
