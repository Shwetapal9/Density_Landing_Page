import * as React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import "../sass/basics.scss";
import Frame from "../components/frame";
import Market from "../components/market";
import Graph from "../components/graph";
import Deposit from "../components/deposit";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Frame />
      <Market />
      <Graph />
      <Deposit />
    </>
  );
};

export default IndexPage;
