import { useState } from "react";

export default function TaskForm({onAdd}){
    const [taskName, setTaskName] = useState( );
    function handleClick(ev) {
        ev.preventDefault();
        onAdd(taskName);
        setTaskName('');

    }


    return(
        <form onSubmit={handleClick}>
            <button>+</button>
            <input type="text"
                     value={taskName}
                     onChange={ev => setTaskName(ev.target.value)} 
                     placeholder="Your Next Task" />
          
        </form>
    )
}