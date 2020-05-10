import React from 'react';

export default function({todo,hDelete,tid}){
    const [state,setState]=React.useState('input'+tid);
    return <li><div>
        <div><span><input type='text' value={state} onChange={(e)=>{setState(e.target.value)}}/></span></div>
        <div><span>{todo}</span><button onClick={()=>hDelete(tid)}>Delete</button></div>
    </div></li> ;
}