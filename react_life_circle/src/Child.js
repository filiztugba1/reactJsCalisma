import React, { Component } from 'react';

 class Child extends Component {
 constructor(props)
  {
    super(props);
    this.state={
      favoritecolor:"red"
    }
    console.log("constructor child");
  }

  componentWillReceiveProps=()=> //// conponente props gönderildiğinde calısır
  {
    console.log("componentWillReceiveProps child");
  }

  componentWillMount = () => {  ////renderdan hemen önce calışır
    console.log("componentWillMount child");
  }

  componentDidMount = () => { ////renderdan hemen sonra calışır
    console.log("componentDidMount child");
    setTimeout(() => {
      this.setState({
        favoritecolor:'blue'
      })
    }, 2000);
  }

  render() {
    console.log("render child");
    return (
      <div>
        child
      </div>
    )
  }
}
export default Child;
