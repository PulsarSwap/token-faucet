import "./App.css";
import FaucetToken from "./constants/FaucetToken.json";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col } from "react-bootstrap";
import Faucet from "./components/Faucet";
//import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

function App() {
  const Token = FaucetToken;

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <main className="main">
            <h1 className="title">
              {/* Welcome to <a href="https://thirdweb.com/">thirdweb</a>!  */}
              Welcome to Pulsar Faucet!
            </h1>
            <br></br>

            {/* <p className="description">
              Get started by configuring your desired network in{" "}
              <code className="code">src/index.js</code>, then modify the{" "}
              <code className="code">src/App.js</code> file!
            </p> */}

            {/* <p className="description">
              Please connect Metamask and choose Goerli test network
            </p> */}

            {/* <div className="connect">
              <ConnectWallet accentColor="#f213a4" colorMode="light" />
            </div> */}

            <Faucet tokenContract={Token} />

            {/* <div className="grid">
              <a href="https://portal.thirdweb.com/" className="card">
                <h2>Portal &rarr;</h2>
                <p>
                  Guides, references and resources that will help you build with
                  thirdweb.
                </p>
              </a>

              <a href="https://thirdweb.com/dashboard" className="card">
                <h2>Dashboard &rarr;</h2>
                <p>
                  Deploy, configure and manage your smart contracts from the
                  dashboard.
                </p>
              </a>

              <a href="https://portal.thirdweb.com/templates" className="card">
                <h2>Templates &rarr;</h2>
                <p>
                  Discover and clone template projects showcasing thirdweb
                  features.
                </p>
              </a>
            </div>
            <Col>
              <div>Goerli Token Faucet</div>
            </Col>
            <Col>
              <div> our send area</div>
            </Col> */}
          </main>
        </Row>
      </Container>
    </div>
  );
}

export default App;
