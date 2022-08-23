import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import './app.css';
import axios from 'axios';
import ImageList from './image/ImageList';

class App extends Component {

    state={
        images:[]
    }
    onSearchImage=async(search)=>{
        console.log('App'+search);
        let url='https://api.unsplash.com/search/photos';
        const result=await axios.get(url,{
            params:{
                query:search
            },
            headers:{
                Authorization:'Client-ID OhesanUBS0biud459l4-VgRAck4sciE7ouYgZlpX6zU'
            },
            method:'GET'
        })
        // .then((result)=>{
        //     console.log(result)
        // })

        this.setState({
            images:result.data.results
        })
        console.log(result)
    }

    render() {
        return (
            <div className='app-container'>
                <SearchBar onSearchImage={this.onSearchImage}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
