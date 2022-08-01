import React, { Component } from 'react'

 class DecideActivity extends Component {
  constructor()
  {
    super();
    this.state={
      longitude:0,
      latitude:0,
      error:''
    }
  }
  
  render() {

    window.navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.setState({
          longitude:position.coords.longitude,
          latitude:position.coords.latitude
        });
    },
    (err)=>
    {
      console.log(err);
      this.setState({
        error:err,
      });
    }
    );

    const{longitude,latitude,error}=this.state;
    if(longitude!==0 && !error)
    {
        return(
          <div>
            Boylam:{longitude}
            <br/>
            enlem:{latitude}
          </div>
        )
    }
    if(longitude===0 && error)
    {
      <div>
      hata:{error}
    </div>
    }
    return (
      <div>
        Yükleniyor...
      </div>
    )
  }
}
export default DecideActivity;