import React,{Component} from 'react';
import Contacts from './Contacts';
import './App.css';
class App extends Component {
  constructor(props)
  {
    super(props)
    this.addContact=this.addContact.bind(this);
  }
  state={
    contacts:[
      {
        name:'Filiz Çürükcü',
        phone:'0555 444 40 74'
      },
      {
        name:'Şeyma Çürükcü',
        phone:'0555 854 40 74'
      },
      {
        name:'Damla Alpakın',
        phone:'0555 454 40 74'
      },
    ]
  };

  addContact(contact)
  {
      this.state.contacts.push(contact);
      this.setState(this.state);
  }

 render(){
 
  return (
    <div className="App">
      <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
    </div>
    );
 }
}

export default App;
