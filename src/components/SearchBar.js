import React, { Component } from 'react';

class SearchBar extends Component{
    // onInputChange=(event)=>{
    //     console.log(event.target.value);
    // }
    state={
        term:''
    };
    // componentDidUpdate(){
    //     console.log(this.state.term)
    // }
    onFormSubmitHandler=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmitHandler}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            placeholder="Search..." 
                            onChange={e => this.setState({term:e.target.value})}
                        

                        />
                    </div>
                </form>
            </div>
        )
    };
}
export default SearchBar;
