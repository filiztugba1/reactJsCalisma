import React, { Component } from 'react'

 class Form extends Component {
    constructor()
    {
        super();
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    state={
        name:'',
        phone:''
    }
    onChange(e)
    {
        this.setState({
           [e.target.name]:e.target.value,
        })
    }

    onSubmit(e)
    {
       e.preventDefault();  // formdaki get parametresi kısmını kaldırır
       this.props.addContact(
        {
            ...this.state
        }
       );

        this.setState({
            name:'',
            phone:''
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <input name="name" id="name" value={this.state.name} onChange={this.onChange} placeholder="bir isim giriniz"/>
            <input name="phone" id="phone" value={this.state.phone} onChange={this.onChange} placeholder="bir telefon giriniz"/>
            <button >Ekle</button>
        </form>
      </div>
    )
  }
}
export default Form;