import React, { Component } from 'react'
import axios from 'axios';
// import {  useParams } from 'react-router-dom';
 class Post extends Component {

  
  state={
    post:null
  }

    componentDidMount = () => {
        // let params = useParams()
        // const { post_id } = useParams();
      let id=this.props.match.params.post_id;
  

      axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(response=>{
          this.setState({
              post:response.data
          })
      }
      
      )


    }
    

  render() {
    const post=this.state.post?(
      <div className='post'>
      <h4 className='center'>{this.state.post.title}</h4>
      <p>{this.state.post.body}</p>
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


export default Post;