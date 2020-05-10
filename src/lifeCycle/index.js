import React from 'react';

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
        {console.log('%c render', `color: ${this.state.color};`);}
        const {count}=this.state;
        return <div style={{margin:'auto',width:'80%', marginBottom:'5rem'}}>
            <h1>Component LifeCycle</h1>
            <div style={{textAlign:'left'}}>
                <p>The lifecycle of React consists of three phase:</p>
                <ul>
                    <li>Mounting</li>
                    <li>Updating</li>
                    <li>Unmounting</li>
                </ul>
                <div>
                    <h2>Mounting</h2>
                    <p>
                        These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
                    </p>
                    <ul>
                        <li>constructor()</li>
                        <li>static getDerivedStateFromProps(props, state)</li>
                        <li>render()</li>
                        <li>componentDidMount()</li>
                    </ul>
                </div>
                <div>
                    <h2>Updating</h2>
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
                </div>
                <div>
                    <h2>Updating</h2>
                    <p>
                        This method is called when a component is being removed from the DOM:
                    </p>
                    <ul>
                        <li>componentWillUnmount()</li>
                    </ul>
                </div>
            </div>
            {`Current State: ${this.state.iState}`}
            <button onClick={()=>this.setState({iState:'updated '+count+1,count:count+1,color:'#00ff00'})}>Change State</button>
        </div>

    }

}

export default LifeCycle;