import React, { Component } from 'react'
import List from './List';
import Form from './Form';
import { PropTypes } from 'prop-types';
 class Contacts extends Component {
    static propTypes={
        addContact:PropTypes.func,
        contacts:PropTypes.array.isRequired,
    }
  render() {
    return (
      <div>
        <List contacts={this.props.contacts}/>
        <Form addContact={this.props.addContact}/>
      </div>
    )
  }
}
export default Contacts;