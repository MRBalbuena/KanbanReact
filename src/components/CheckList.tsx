import * as React from "react";

export interface ICheckList{
    cardId: string;
    tasks: any;
}
export class CheckList extends React.Component<ICheckList, never>{
    render(){
        let tasks = this.props.tasks.map((task: any, index: number)=> {            
            return <li className="checklist__task" key={task.id}>
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="#" className="checklist__task--remove" />
            </li>
        })
        return(
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text" className="checklist--add-task" placeholder="Type then hit Enter to add a task" />
            </div>
        )
    }
}