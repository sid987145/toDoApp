import { useState } from 'react'
const  ToDoApp = () =>{
    const [toDos,setToDos] = useState([]);
    const [newToDo,setNewToDo] = useState("");
    const handleToDo = () =>{
        console.log("Function Called Successfully");
        if (newToDo.trim() != ""){
            setToDos([...toDos,newToDo]);
            setNewToDo("");
        }
    }
    // const handleToDo = () =>{
    //     console.log("Function Called Successfully");
    //     if (newToDo.trim() != ""){
    //         setToDos([...toDos,newToDo]);
    //         setNewToDo("");
    //     }
    // }

    return(
        <>
        <h1>ToDoList</h1>
        <input type="text" value={newToDo}  onChange={(event)=>setNewToDo(event.target.value)}/>
        <br />
        <br />
        <button onClick={handleToDo}>Click To Add To Do</button>
        <ul>{
            toDos.map((todo,index)=>(
                <li key={index}>
                    {todo}
                </li>
            ))
            }</ul>
        </>
    )
}
export default ToDoApp;