import * as React from "react";

export interface ICheckList{
    cardId: string;
    tasks: any;
}
export class CheckList extends React.Component<ICheckList, never>{
    render(){
        let tasks = this.props.tasks.map((task: any)=> {            
            return <li className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} />
                {task.name}
                <a href="#" className="checklist__task--remove" />
            </li>
        })

        return(
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        )
    }
}