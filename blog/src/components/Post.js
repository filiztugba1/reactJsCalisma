import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deletePost } from '../action/deleteAction';
// import {  useParams } from 'react-router-dom';
 class Post extends Component {
  
  handleClick=()=>{
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    const post=this.props.post?(
      <div className='post'>
      <h4 className='center'>{this.props.post.title}</h4>
      <p>{this.props.post.body}</p>
      <div onClick={this.handleClick} className='btn gray'>
        delete post
      </div>
      </div>
    ):(
      <div className='center'>
      Loading Post
      </div>
    );
    return (
      <div className='container'>
        <h4>{post}</h4>
      </div>
    )
  }
}

const mapStateToProps=(state,ownProps)=>{
  let id=ownProps.match.params.post_id;
  return {
    post:state.posts.find(post=>post.id=id)
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    deletePost:(id)=>dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);