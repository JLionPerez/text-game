// import logo from './logo.svg';
// import './App.css';
import { TypeAnimation } from "react-type-animation";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
// import Button from "./components/Button";
import React, { useState } from "react";
import places from './testplace'


// glabal variables and methods (easier testing)
// function textPlace() {
//   let place = 0
//   return 
// }

function App() {

  //private variables and methods
  let str = places["test1"]

  return (
    <Wrapper>
      <Screen value=<TypeAnimation sequence={[str,1000]} speed={50}/>/>
      <ButtonBox>
        
      </ButtonBox>
    </Wrapper>
    // console.log(str)
  );
}

export default App;
