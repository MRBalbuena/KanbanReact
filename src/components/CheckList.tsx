import * as React from "react";

export interface ICheckList {
    cardId: string;
    tasks: any;
    taskCallbacks: ITaskCallbacks;
}
export class CheckList extends React.Component<ICheckList, never>{
    checkInputKeyPress(evt: React.KeyboardEvent<HTMLInputElement>) {
        if (evt.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, evt.currentTarget.value);
            evt.currentTarget.value = '';
        }
    }
    render() {
        let tasks = this.props.tasks.map((task: any, index: number) => {
            return <li className="checklist__task" key={task.id}>
                <input type="checkbox" defaultChecked={task.done} onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, index)} />
                {task.name}
                <a href="#" className="checklist__task--remove"
                    onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, index)} />
            </li>
        })
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text" className="checklist--add-task" placeholder="Type then hit Enter to add a task" 
                onKeyPress={this.checkInputKeyPress.bind(this)}/>
            </div>
        )
    }
}