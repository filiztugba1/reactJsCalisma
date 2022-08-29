import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../ball.png';

class Home extends Component {

    state={
        posts:[]
    }

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        this.setState({
            posts:response.data.slice(0,10)
            
        })
    }
    
    )
   
}

    render() {
        const {posts}=this.state;
        const postList=posts.length?(
            posts.map(post=>{
               return (
                <div className="card" key={post.id}>
                    <img className='imgstype' src={Pokeball} alt=""/>
                <div className='card-content'>
                    <Link to={"/"+post.id}>
                    <span className='card-title red-text'>
                        {post.title}
                    </span>
                    </Link>
                    <p>{post.body}</p>
                </div>
            </div>
               )
               })
               
        ):(
            <div className="center">
                No post to show
            </div>
        )
        return (
            <div>
                <div className='container'>
                    <h4 className='center'>Home</h4>
                    {postList}
                </div>
            </div>
        )
    }
}
export default Home;
