import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addTodo, removeTodo} from "../redux/redux"
function Todo () {
    const [task, setTask] = useState('')
    const [desc, setDesc] = useState('')

    const dispatch= useDispatch()
    const tasks = useSelector(state=> state.todo)

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTodo({
            name:task,
            description: desc
        }))
    }
    return(
        <>
            <div className="container">
               <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="task">task name</label>
    <input type="text" className="form-control" id="task"  placeholder="task" value={task} onChange={(e)=>setTask(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="desc">Description</label>
    <input type="text" className="form-control" id="desc" placeholder="description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
            <div className="mt-5">
                {
                    tasks.length?
                    tasks.map((task, index)=>(
                        <div className="card mb-2" key={index}>
                            <div className="">
                            <h5 >Name: {task.name}</h5>
                            <hr />
                            <p>description: {task.description}</p>
                            </div>
                            <button onClick={()=>dispatch(removeTodo(index))} className="btn btn-danger">x</button>
                        </div>
                    )): null
                }
            </div>
        </div>
        </>
    )

}
export default Todo