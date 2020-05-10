import React, { Fragment } from 'react';
import { Div, H2, Button } from './../styles' 
class LifeCycle extends React.Component{

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
        console.log('%c render', `color: ${this.state.color};`);
        const {count}=this.state;
        return <>
        <Div style={{margin:'auto',width:'80%', marginBottom:'1rem', padding: 10 }} engrave={true}>
            <h1>Component LifeCycle</h1>
            
                <Div style={{textAlign:'left'}}>
                    <Div  style={{ flex:1, flexBasis: 300, flexShrink: 300 }} border={true}>
                        <p>The lifecycle of React consists of three phase:</p>
                        <ul>
                            <li>Mounting</li>
                            <li>Updating</li>
                            <li>Unmounting</li>
                        </ul>
                    </Div>
                    <Div style={{ flexWrap: 'wrap'}}>
                    <Div boxed={true} style={{ flex:1, flexBasis: 300, flexShrink: 300 }} border={true}>
                        <H2>Mounting</H2>
                        <p>
                            These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
                        </p>
                        <ul>
                            <li>constructor()</li>
                            <li>static getDerivedStateFromProps(props, state)</li>
                            <li>render()</li>
                            <li>componentDidMount()</li>
                        </ul>
                    </Div>
                    <Div boxed={true} style={{ flex:1, flexBasis: 300, flexShrink: 300 }} border={true}>
                        <H2>Updating</H2>
                        <p>
                            An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
                        </p>
                        <ul>
                            <li>static getDerivedStateFromProps(props,state)</li>
                            <li>shouldComponentUpdate(nextProps, nextState)</li>
                            <li>render()</li>
                            <li>getSnapshotBeforeUpdate(prevProps, prevState)</li>
                            <li>componentDidUpdate()</li>
                        </ul>
                    </Div>
                    <Div boxed={true} style={{ flex:1, flexBasis: 300, flexShrink: 300 }} border={true}>
                        <H2>Unmounting</H2>
                        <p>
                            This method is called when a component is being removed from the DOM:
                        </p>
                        <ul>
                            <li>componentWillUnmount()</li>
                        </ul>
                    </Div>
                </Div>
                
            </Div>
        </Div>
        <Div style={{margin:'auto',width:'80%', marginBottom:'5rem', padding: 10 , display: 'flex',justifyContent: 'center' }} engrave={true}>
            <Div style={{ display: 'flex' }}>
                <Div style={{ marginRight: 10}}>
                    <H2 style={{ fontSize: '1rem'}}>Current State</H2>
                    <Div style={{ fontSize: '2rem'}}>{this.state.iState}</Div>
                </Div>
                <Div style={{display: 'flex'}}>
                    <Button onClick={()=>this.setState({iState:'updated '+(count+1),count:count+1,color:'#00ff00'})}>Change State</Button>
                </Div>
            </Div>
        </Div>
        </>

    }

}

export default LifeCycle;