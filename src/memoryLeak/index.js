import React from 'react';
import Comp1 from './component1';
import Comp2 from './component2';
import FunComp1 from './funcComp1';
import FunComp2 from './funcComp2';

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
            {/* <div>
                {this.state.ind===1 && <Comp1 name='Component 1'/>}
                {this.state.ind===2 && <Comp2 name='Component 2'/>}
            </div> */}
            <div>
                {this.state.ind===1 && <FunComp1 compName='Component 1'/>}
                {this.state.ind===2 && <FunComp2 compName='Component 2'/>}
            </div>
            <button onClick={this.hSubmit.bind(this)}> Show Component->{this.state.ind===1?'2':'1'}</button>
        </div>
    }
} 

export default Index;