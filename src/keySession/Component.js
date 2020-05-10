import React from 'react';

class Comp extends React.Component{
    constructor(props){
        super(props);
        this.state={ind:0};
        this.hSubmit = this.hSubmit.bind(this)
    }
    hSubmit=function(e){
        setTimeout(() => {
            this.setState({ind:2})
        }, 3000);
        
    }
    render(){
        const {name}=this.props;
        return <div style={{padding:'10rem 1rem'}}>
            <div>Currently visible: {` ${name}`} </div>
            <div>Current State: {` ${this.state.ind}`}</div>
            <button onClick={this.hSubmit}> Toggle State ->{this.state.ind}</button>
            {/* <button onSubmit={this.hSubmit.bind(this)}> Toggle State ->{this.state.ind}</button> */}
        </div>
    }
} 

export default Comp;