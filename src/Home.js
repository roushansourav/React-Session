import React from 'react';
import { Div, H2} from './styles' 

//JSX
const element1=<h1> Hello JSX</h1>
//JSX transpiled by Babel
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={iState:'initial',count:0,color:'#ff0000'};
        console.log('%c Constructor', `color: ${this.state.color};`);
    }

    componentDidMount(){
        console.log('%c componentDidMount', `color: ${this.state.color};`);
    }

    //will be deprecated
    // componentWillMount(){
    //     console.log('Component Will mount');
    // }

    static getDerivedStateFromProps(props, state){
        console.log('%c getDerivedStateFromProps', `color: ${state.color};`);
        return state;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('%c componentDidUpdate', `color: ${this.state.color};`); 
        console.log(`%c ${snapshot}`, `color: #00f;`);  
    }

    //will be deprecated
    // componentWillReceiveProps(){
    //     console.log('Component Received Props');
    // }

    //will be deprecated
    // componentWillUpdate(){
    //     console.log('component will update');
    // }

    componentWillUnmount(){
        console.log('%c componentWillUnmount', `color: ${this.state.color};`);
        console.log('Do the clean process');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('%c shouldComponentUpdate', `color: ${nextState.color};`);
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('%c getSnapshotBeforeUpdate', `color: ${this.state.color};`); 
        return 'snapped';
    }

    render(){
        
        return <>
        <Div style={{margin:'auto',width:'80%', marginBottom:'1rem', padding: 10 }} engrave={true}>
            <h1>React</h1>            
                <Div style={{textAlign:'left'}}>
                    <Div style={{ flexWrap: 'wrap'}}>
                    <Div boxed={true} style={{ flex:1, flexBasis: 300, flexShrink: 300 }} border={true}>
                        <H2>Important Topics</H2>
                        <ul>
                            <li>Components</li>
                            <li>JSX(JavaScript XML)</li>
                            <li>Virtual DOM</li>
                            <li>State & Props</li>
                            <li>LifeCycle</li>
                            <li>Controlled & Uncontrolled Components</li>
                            <li>Synthetic Events</li>
                            <li>LifeCycle</li>
                        </ul>
                    </Div>
                </Div>
            </Div>
        </Div>
        <Div style={{margin:'auto',width:'80%', marginBottom:'5rem', padding: 10 , display: 'flex',justifyContent: 'center' }} engrave={true}>
            {element}
						{element1}
        </Div>
        </>
    }
}

export default Home;