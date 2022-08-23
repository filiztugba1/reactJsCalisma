import React, { Component } from 'react'
import './imagelist.css';
import Image from './Image';
 const ImageList=({images})=> {
    const preparedImageList=images.map(image=>{
        return (
            <Image key={image.key} image={image}/>
        )
    })
  return (
      <div className='image-list-container'>
         {preparedImageList}
      </div>
    )
}
export default ImageList;
