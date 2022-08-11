import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import './app.css';

class App extends Component {

    onSearchImage=search=>{
        console.log('App'+search);
    }

    render() {
        return (
            <div className='app-container'>
                <SearchBar onSearchImage={this.onSearchImage}/>
            </div>
        );
    }
}

export default App;
