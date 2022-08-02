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
  decideActivity(lat)
  {
    const currentMounth=new Date().getMonth();
    if(lat<0)
    {
       // güney yarım küre
       if(currentMounth>3 && currentMounth<9)
       {
             return "spor salonuna gidebilirsin";
       }
       else
       {
         return "yüzmeye gidebilirsin";
       }
    }else
    {
      // kuzey yarım küre
      if(currentMounth>9 || currentMounth<3)
      {
            return "spor salonuna gidebilirsin";
      }
      else
      {
        return "yüzmeye gidebilirsin";
      }
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
            <br/>
           {this.decideActivity(latitude)}
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