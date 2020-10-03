import React, { Component } from 'react';
import Unsplash from '../src/api/UnspalshApi';
import SearchBar from './components/SearchBar';
import ImageList from '../src/components/Images/ImageList';

class App extends Component{
    state ={
        images : []
    }
    async onSearchSubmit(term){
       const response = await Unsplash.get('/search/photos',{
            params: {query:term}
            
        });
        this.setState({images:response.data.results});
       
        
    }
    showImageHandler=()=>{
        this.state.images.map((image)=>{
            return <div>{image.urls.thumb}</div>
        })
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar onSubmit={e=>this.onSearchSubmit(e)} />
               
                <ImageList images={this.state.images}/>
            </div>
            )
        }
}
export default App;