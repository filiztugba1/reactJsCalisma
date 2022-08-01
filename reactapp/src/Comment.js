import React from 'react'

import  faker from 'faker';
const Comment = () => {
  return (
    <div className="comment">
    <a className="avatar" href="/">
      <img alt="" src={faker.image.imageUrl(30, 30, 'cat', true)}/>
    </a>
    <div className="content">
      <a className="author" href="/">Stevie Feliciano</a>
      <div className="metadata">
        <div className="date">2 days ago</div>
        <div className="rating">
          <i className="star icon"></i>
          5 Faves
        </div>
      </div>
      <div className="text">
        Hey guys, I hope this example comment is helping you read this documentation.
      </div>
    </div>
  </div>
  )
}

export default Comment;
