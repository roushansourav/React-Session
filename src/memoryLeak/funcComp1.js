import React,{useEffect,useRef} from 'react';

export default function({compName}){
    const [name,setName]=React.useState('Roushan');
    //memory leak solution
    // const unmounted = useRef(false);
    // useEffect(() => {
    // return () => { unmounted.current = true }
    // }, []);
    // const hSubmit=function(e){
    //     setTimeout(() => {
    //         if(!unmounted.current)name==='Roushan'?setName('VenomWolf'):setName('Roushan');
    //     }, 3000);        
    // }

    const hSubmit=function(e){
        setTimeout(() => {
          name==='Roushan'?setName('VenomWolf'):setName('Roushan');
        }, 3000);        
    }
    return <div style={{padding:'5rem 1rem'}}>
            <div>Currently visible: {` ${compName}`} </div>
            <div>Current State: {` ${name}`}</div>
            <button onClick={hSubmit}> Change Name</button>
            {/* <button onSubmit={this.hSubmit.bind(this)}> Toggle State ->{this.state.ind}</button> */}
        </div>
}