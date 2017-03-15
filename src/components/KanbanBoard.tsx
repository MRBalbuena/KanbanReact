import * as React from "react";
import { List } from "./List";
import {ContactListData} from '../containers/ContactListData';

var contacts = new ContactListData();

export interface IKanbanBoard {
    cards: ICard[],
    taskCallbacks: ITaskCallbacks
}

export class KanbanBoard extends React.Component<IKanbanBoard, never>{
    render() {
        return (
            <div className="app">
                <List id="todo" title="To Do" 
                    taskCallbacks={this.props.taskCallbacks}
                    cards={this.props.cards.filter((card: any) => card.status == "todo")} />
                <List id="in-progress" title="In Progress" 
                    taskCallbacks={this.props.taskCallbacks}
                    cards={this.props.cards.filter((card: any) => card.status == "in-progress")
                } />
                <List id="done" title="Done" 
                    taskCallbacks={this.props.taskCallbacks}
                    cards={this.props.cards.filter((card: any) => card.status == "done")
                } />
                <br/>                
            </div>
        )
    }
}
