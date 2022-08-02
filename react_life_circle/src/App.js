import React, { Component } from 'react'
import Child from "./Child";
import './App.css';
 class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      favoritecolor:"red",
      tl:0
    }
    console.log("constructor");
  }

  componentWillMount = () => {  ////renderdan hemen önce calışır
    console.log("componentWillMount");
  }

  componentDidMount = () => { ////renderdan hemen sonra calışır
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({
        favoritecolor:'blue'
      })
    }, 2000);
  }
  
  onClick = () =>{
    this.setState({
      favoritecolor:"green"
    })
  }
  change=(e)=>{
    this.setState({
      tl:e.target.value
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => { 
    // console.log("shouldComponentUpdate",nextProps,nextState);
    return nextState.tl%5===0;
  }

  componentWillUpdate = (nextProps, nextState) => { //// shouldComponentUpdate varsa calısır ve shouldComponentUpdate dan sonra calısır
    console.log("componentWillUpdate",nextProps,nextState);
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate",prevProps,prevState);
  }
  

  
  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>My favorite color is {this.state.favoritecolor}</h1>
        <Child renk={this.state.favoritecolor}/>
        <button onClick={this.onClick}>Change Color</button>
        <input name="tl" id="tl" onChange={this.change} />
        <br/>
        <br/>
        her portakal 5 tl
        <br/>
        {this.state.tl/5} tane portakal alabilirsin.
        <br/>
      </div>
    )
  }
}

export default App;
