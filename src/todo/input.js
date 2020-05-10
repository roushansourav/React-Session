import React from 'react';

export default function({hSubmit}){
    const [input,setInput]=React.useState('');
    return <form onSubmit={(e)=>{e.preventDefault();hSubmit(input);}}>
    <input type='text' placeholder='Enter new todo' value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button type='submit'>Add</button>
    </form>
}