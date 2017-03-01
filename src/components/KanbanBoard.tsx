import * as React from "react";
import { List } from "./List";
import {Contacts} from './contacts/Contacts';
import {ContactListData} from '../containers/ContactListData';

var contacts = new ContactListData();

export interface IKanbanBoard {
    cards: any
}

export class KanbanBoard extends React.Component<IKanbanBoard, never>{
    render() {
        return (
            <div className="app">
                <List id="todo" title="To Do" cards={
                    this.props.cards.filter((card: any) => card.status == "todo")
                } />
                <List id="in-progress" title="In Progress" cards={
                    this.props.cards.filter((card: any) => card.status == "in-progress")
                } />
                <List id="done" title="Done" cards={
                    this.props.cards.filter((card: any) => card.status == "done")
                } />
                <br/>
                <Contacts contacts={contacts.contacts}/>
            </div>
        )
    }
}
