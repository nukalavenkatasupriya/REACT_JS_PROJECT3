// import React from 'react';
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Header from './header';
import StateComp from './stateCom';
import State from './components/State';
import Cards from "./components/cards";
import {BrowserRouter,Route} from 'react-router-dom';
import Resume from "./components/Resume";

function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Cards}/>
      <Route exact path="/resume" component={Resume}/>
      </BrowserRouter>
      {/* <Cards/> */}
    </div>
  )





  // const [state,setState]=useState({name:"Supriya",role:"Student"})
  // let changeState=()=>{
  //   setState({
  //     name:"Sai",
  //     role:"Junior"
  //   })
  // }

  // let prevState=()=>{
  //   setState({
  //     name:"Supriya",
  //     role:"Seniors"
  //   })
  // }
  // return(
  //   <div className="App">
  //     <h2 onMouseOver={changeState} onMouseLeave={prevState}>
  //       {state.name} is {state.role}
  //       {/* <State/> */}
  //     </h2>
  //   </div>
  // );


  // const [state,setState]=useState({name:"Supriya",role:"Student"})
  // return (
  //   <div className="App">
  //     <h2 onMouseOver={()=>setState({name:"Sai",role:"Junior"})}
  //     onMouseLeave={()=>setState({name:"Supriya",role:"Senior"})}>
  //       {state.name} is a {state.role}</h2>

      {/* <State/> */}
      
      {/* <h1>Hello Apssdc</h1>
      <h2>Welcome to Reactjs</h2> */}
      {/* <Hello/>
      <Home/> */}
      {/* <Header/>
      <Header name=" suppi"/>
      <Header name=" sai">
        <p>I am Learning Html</p>
      </Header>
      <Header name=" yashu">
        <p>I am Learning JS</p>
      </Header> */}
      {/* <StateComp/> */}
      
      {/* <StateComp name1="Rajesh" name2="apssdc">
      <p>hello APSSDC</p>
      </StateComp> */}

    // </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
      
    // </div>

    // );
}

// function Hello(){
//   return <p>This is child Component</p>;
// }

export default App;
