import React from 'react';
import Comp from './Component';
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={ind:1};
    }
    hSubmit=function(e){        
        if(this.state.ind===1) this.setState({ind:2})
        else this.setState({ind:1})    
    }
    render(){
        return <div>
            <div>
                {this.state.ind===1 && <Comp name='Component 1'/>}
                {this.state.ind===2 && <Comp name='Component 2'/>}
            </div>
            <button onClick={this.hSubmit.bind(this)}> Show Component->{this.state.ind}</button>
        </div>
    }
} 

export default Index;