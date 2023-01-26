import React from "react";

 export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


type PropsType = {
    title: string
    tasks: TaskType[]
}
export function Todolist(props:PropsType ) {  //props = { title: "What to learn", tasks: []

    return (
        <div>
            <h3> {props.title} </h3>
            <div>
                <input/>
                <button> +</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/><span>{props.tasks[2].title}</span></li>
            </ul>

            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}

