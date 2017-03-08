import * as React from "react";
import { KanbanBoard } from './KanbanBoard';
import * as rp from 'request-promise';
var update = require('react-addons-update');
require("jspolyfill-array.prototype.findIndex");


interface KanbanBoardContainerState {
    cards: ICard[];
}

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'xxx'
};

export class KanbanBoardContainer extends React.Component<{}, KanbanBoardContainerState>{
    public state: KanbanBoardContainerState;
    constructor() {
        super();
        this.state = { cards: [] };
    }

    componentDidMount() {
        let req = {
            uri: API_URL + '/cards',
            method: 'GET',
            headers: API_HEADERS,
            json: true
        };
        rp(req)
            .then((responseData: any) => {
                this.setState({ cards: responseData })
            })
            .catch((error: any) => {
                console.log('Error fetching and parsing data', error);
            })
    }

    addTask(cardId: number, taskName: string) {
        let cardIdx = 0;
        let originalState = this.state;
        let cardsCopy = this.state.cards.map((c: ICard, i: number) => {
            if (c.id == cardId) cardIdx = i;
            return c;
        });
        let newTask = { id: Date.now(), name: taskName, done: false };
        let tasksCopy = cardsCopy[cardIdx].tasks.map((t: ITask) => t);
        tasksCopy.push(newTask);
        cardsCopy[cardIdx].tasks = tasksCopy;
        this.setState({ cards: cardsCopy });
        let req = {
            uri: `${API_URL}/cards/${cardId}/tasks`,
            method: 'post',
            headers: API_HEADERS,            
            body: JSON.stringify(newTask)
        };
        rp(req)
            .then((responseData: any) => {
                console.log(responseData);
                newTask.id = JSON.parse(responseData).id;
                this.setState({ cards: cardsCopy })
            })
            .catch((error: any) => {
                console.log('Error adding task: ', error);
            });
    }
    deleteTask(cardId: number, taskId: number) {
        var originalState = this.state;
        var cardsCopy = this.state.cards.map((m: ICard) => m);
        let cardIdx = 0;
        let card = cardsCopy.filter((f: ICard, i: number) => {
            if (f.id == cardId) cardIdx = i;
            return f.id == cardId;
        });
        let taskIdx = 0;
        card[0].tasks.some((t: ITask, i: number) => {
            if (t.id == taskId) {
                taskIdx = i;
                return true;
            }
        })
        card[0].tasks.splice(taskIdx, 1);
        this.setState({ cards: cardsCopy });
        // Call server to remove task
        let req = {
            uri: `${API_URL}/cards/${cardId}/tasks/${taskId}`,
            method: 'delete',
            headers: API_HEADERS,
            json: true
        };
        rp(req)
            .then((responseData: any) => {
                console.log(responseData)
            })
            .catch((error: any) => {
                console.log('Error deleting task: ', error);
                this.setState(originalState);
            });

    }
    toggleTask(cardId: number, taskId: number) {
        let cardIdx = 0;
        let originalState = this.state;
        let cardsCopy = this.state.cards.map((c: ICard, i: number) => {
            if (c.id == cardId) cardIdx = i;
            return c;
        });
        let taskIdx = 0;
        let tasksCopy = cardsCopy[cardIdx].tasks.map((t: ITask, i: number) => {
            if (t.id == taskId) taskIdx = i;
            return t;
        });
        tasksCopy[taskIdx].done = !tasksCopy[taskIdx].done;
        this.setState({ cards: cardsCopy });

        let req = {
            uri: `${API_URL}/cards/${cardId}/tasks/${taskId}`,
            method: 'put',
            headers: API_HEADERS,            
            body: JSON.stringify(tasksCopy[taskIdx])
        };
        rp(req)
            .then((responseData: any) => {
                console.log(responseData)
            })
            .catch((error: any) => {
                console.log('Error deleting task: ', error);
                this.setState(originalState);
            });
    }

    render() {
        return <KanbanBoard cards={this.state.cards}
            taskCallbacks={
                {
                    toggle: this.toggleTask.bind(this),
                    add: this.addTask.bind(this),
                    delete: this.deleteTask.bind(this)
                }
            }

        />
    }
}
