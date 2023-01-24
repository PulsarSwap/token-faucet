//import { useState } from "react";
import { ethers } from "ethers";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  TSPUL_ADDRESS,
  TSPUL_ADDRESS_MANTLE,
  TSUSD_ADDRESS,
  TSUSD_ADDRESS_MANTLE,
} from "../constants";
//import { ConnectWallet } from "@thirdweb-dev/react";
//import Message from "./Message";

const Faucet = (props) => {
  // const [balance, setBalance] = useState(); Commented Out
  // const [showBalance, setShowBalance] = useState(false);

  // const [balanceTSUSD, setBalanceTSUSD] = useState();
  // const [showBalanceTSUSD, setShowBalanceTSUSD] = useState(false);
  // const [balanceTSPUL, setBalanceTSPUL] = useState();
  // const [showBalanceTSPUL, setShowBalanceTSPUL] = useState(false);

  // async function getBalance(tokenAddress) {
  //   if (typeof window.ethereum !== "undefined") {
  //     const [account] = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     await provider.send('eth_requestAccounts', []); // <- this prompt user to connect metamask
  //     const contract = new ethers.Contract(
  //       tokenAddress,
  //       props.tokenContract,
  //       provider
  //     );
  //     const balance = await contract.balanceOf(account);
  //     // console.log("Balance: ", balance.toString());
  //     setBalance(balance.toString());
  //     setShowBalance(true);
  //   }
  // }

  async function faucet(tokenAddress) {
    if (typeof window.ethereum !== "undefined") {
      // const account = await window.ethereum.request({
      //   method: "eth_requestAccounts", 
      // });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //await provider.send("eth_requestAccounts", []); // <- this prompt user to connect metamask
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        tokenAddress,
        props.tokenContract,
        signer
      );
      contract.mintToken();
    }
  }

  return (
    <div>
      {/* <Card style={{ background: "rgba(227, 104, 222, 0.71)" }}> */}
      <Card.Body>
        {/* <br></br>
        <ConnectWallet accentColor="#f213a4" colorMode="light" />
        <br></br>
        <br></br> */}
        <h3>Goerli ETH Faucet</h3>
        <br></br>
        <div className="d-grid gap-2">
          <Button href="https://faucetlink.to/goerli">Faucet Link</Button>
        </div>
        <br></br>
        <br></br>
        <h3>Goerli ERC20-Token Faucet</h3>
        <Card.Title>
          Please connect Metamask and choose Goerli test network
        </Card.Title>
        <br></br>
        <div className="d-grid gap-2">
          <Card.Text variant="warning">
            TSUSD: 0x7D789b94FD6821f2dDA5958094E86E2D23CdBb75
          </Card.Text>
          <Button onClick={() => faucet(TSUSD_ADDRESS)}>
            Mint 10,000 TSUSD
          </Button>{" "}
          {/* <Button onClick={() => getBalance(TSUSD_ADDRESS)} variant="warning">
            Check TSUSD Balance
          </Button>
          <br></br>
          {showBalance ? <Message balance={balance} /> : null} */}
        </div>
        <br></br>
        <div className="d-grid gap-2">
          <Card.Text variant="warning">
            TSPUL: 0x792C2A733A5a576DA1E0077B71c13ACacC1153B9
          </Card.Text>
          <Button onClick={() => faucet(TSPUL_ADDRESS)}>
            Mint 10,000 TSPUL
          </Button>{" "}
          {/* <Button onClick={() => getBalance(TSPUL_ADDRESS)} variant="warning">
            Check TSPUL Balance
          </Button>
          <br></br>
          {showBalance ? <Message balance={balance} /> : null} */}
        </div>
        <br></br>
        <br></br>
        <h3>Mantle Goerli ERC20-Token Faucet</h3>
        <Card.Title>
          Please connect Metamask and choose Mantle Goerli test network
        </Card.Title>
        <br></br>
        <div className="d-grid gap-2">
          <Card.Text variant="warning">
            TSUSD: 0x0Da76e8b3229531f47A28Ec7039Ea22DC3d54Af2
          </Card.Text>
          <Button onClick={() => faucet(TSUSD_ADDRESS_MANTLE)}>
            Mint 10,000 TSUSD
          </Button>{" "}
          {/* <Button onClick={() => getBalance(TSUSD_ADDRESS)} variant="warning">
            Check TSUSD Balance
          </Button>
          <br></br>
          {showBalance ? <Message balance={balance} /> : null} */}
        </div>
        <br></br>
        <div className="d-grid gap-2">
          <Card.Text variant="warning">
            TSPUL: 0xf17A540559A8a8b0829A60662beB8F77F0104552
          </Card.Text>
          <Button onClick={() => faucet(TSPUL_ADDRESS_MANTLE)}>
            Mint 10,000 TSPUL
          </Button>{" "}
          {/* <Button onClick={() => getBalance(TSPUL_ADDRESS)} variant="warning">
            Check TSPUL Balance
          </Button>
          <br></br>
          {showBalance ? <Message balance={balance} /> : null} */}
        </div>
      </Card.Body>
      {/* </Card> */}
    </div>
  );
};

export default Faucet;
