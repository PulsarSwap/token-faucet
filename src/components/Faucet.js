//import { useState } from "react";
import { ethers } from "ethers";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TSPUL_ADDRESS, TSUSD_ADDRESS } from "../constants";
//import Message from "./Message";

const Faucet = (props) => {
  // const [balance, setBalance] = useState();
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
        <Card.Title>Goerli ETH Faucet</Card.Title>
        {/* <br></br> */}
        <div className="d-grid gap-2">
          <Button href="https://faucetlink.to/goerli">Faucet Link</Button>
        </div>
        <br></br>
        <br></br>
        <Card.Title>Goerli ERC20-Token Faucet</Card.Title>
        {/* <br></br> */}
        <div className="d-grid gap-2">
          <Card.Text variant="warning">
            TSUSD: 0xD9ddAd120e166CcB831FD3E021b821476ef71621
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
            TSPUL: 0xCFd63660d9C50fcDa523812911D74F297E7F5292
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
      </Card.Body>
      {/* </Card> */}
    </div>
  );
};

export default Faucet;
