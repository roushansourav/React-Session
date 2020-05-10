import React from 'react';
import Todo from './todo.js';
import Input from './input';
export default function(){
    const [tasks,setTasks]=React.useState([]);
    const hSubmit=function(todo){
        const id=Math.floor(Math.random() * 100)+(new Date()).getMilliseconds();
        const newTodos=[...tasks,{id,todo}];
        setTasks(newTodos);
    }

    const hDelete=function(tid){
        setTasks(tasks.filter(({id})=>id!==tid));
    }
    return <div>
        <h1>Todo</h1>
        <div>
            <Input hSubmit={hSubmit}/>
        </div>
        <div>
            {/* <ul>{tasks.map((({id,todo},idx)=><Todo key={idx} tid={id} todo={todo} hDelete={hDelete}/>))}</ul> */}
            <ul>{tasks.map((({id,todo})=><Todo key={id} tid={id} todo={todo} hDelete={hDelete}/>))}</ul>
        </div>
        {console.log(tasks)}
    </div>;
}