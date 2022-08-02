import React, { Component } from 'react'
import axios from 'axios';
class App extends Component {

  state={
    users:[],
    isLoading:true
  }
componentDidMount = () => {
  setTimeout(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(filiz =>filiz.data).then(filiz=>{
      // console.log(filiz)
      this.setState({
        users:filiz,
        isLoading:false
      })
    })
  }, 2000);

}


  render() {
    const{isLoading}=this.state;
    return (
      <div className="App">
        <h1>Users</h1>
        {isLoading?'Loading':''}
        {
          this.state.users.map(user=>
           <div key={ user.id}>{ user.name} { user.surname}</div>
          )
        }
    </div>
    )
  }
}
export default App;