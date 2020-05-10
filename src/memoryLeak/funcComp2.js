import React,{useEffect,useRef} from 'react';

export default function({compName}){
    const [name,setName]=React.useState('Dua Lipa');
    
    //memory leak issue.
    // const unmounted = useRef(false);
    // useEffect(() => {
    // return () => { unmounted.current = true }
    // }, []);
    // const hSubmit=function(e){
    //     console.log(unmounted.current)
    //     setTimeout(() => {
    //         console.log(unmounted.current);
    //         if(!unmounted.current)name==='Dua Lipa'?setName('Adele'):setName('Dua Lipa');
    //     }, 3000);        
    // }
    const hSubmit=function(e){
        setTimeout(() => {
            name==='Dua Lipa'?setName('Adele'):setName('Dua Lipa');
        }, 3000);        
    }
    return <div style={{padding:'5rem 1rem'}}>
            <div>Currently visible: {` ${compName}`} </div>
            <div>Current State: {` ${name}`}</div>
            <button onClick={hSubmit}> Change Name</button>
            {/* <button onSubmit={this.hSubmit.bind(this)}> Toggle State ->{this.state.ind}</button> */}
        </div>
}