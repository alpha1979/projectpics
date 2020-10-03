import React, { Component } from 'react';

class ImageCard extends Component{
    constructor(props){
        super(props);
        this.state={span:0};
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans=()=>{
        // console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 10 + 1)
        this.setState({span:span});
    };
    render(){
        return(
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img 
                    ref={this.imageRef}
                    src={this.props.image.urls.regular}
                    alt={this.props.image.description}
                
                    />
            </div>
       )
    }
}
export default ImageCard;