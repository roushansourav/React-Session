import React from 'react';
import Todo from '../todo/todo';
export default function(){
    const [todo,setTodo]=React.useState('');
    const [tasks,setTasks]=React.useState([]);

    const hSubmit=function(e){
        e.preventDefault();
        const id=Math.floor(Math.random() * 100)+(new Date()).getMilliseconds();
        const newTasks=[...tasks,{id,todo}];
        setTasks(newTasks);
    }
    const hDelete=function(tid){
        setTasks(tasks.filter(({id})=>id!==tid));
    }
    return <div>
        <div>
            <form onSubmit={hSubmit}>
            <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button type='submit'>Add</button>
            </form>
        </div>
        <div style={{margin:'auto',width:'300px'}}>
             <ul>{tasks.map((({id,todo},idx)=><Todo key={idx} tid={id} todo={todo} hDelete={hDelete}/>))}</ul>
             {/* <ul>{tasks.map((({id,todo})=><Todo key={id} tid={id} todo={todo} hDelete={hDelete}/>))}</ul> */}
        </div>
    </div>
}