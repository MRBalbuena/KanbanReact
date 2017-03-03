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

    addTask(cardId: number, taskName: string){
        console.log('addTask');
    }
    deleteTask(cardId: number, taskName: string){
        // var arr = [1,2,3,4,5];
                
        // let cardIndex = this.state.cards.filter((f:ICard)=> f.id == cardId);
        // let nextState = update(this.state.cards, {
        //     [cardIndex]
        // })
        
    }
    toggleTask(cardId: number, taskName: string){
        console.log('toggleTask');
    }
    
    render() {        
        return <KanbanBoard cards={this.state.cards} 
            taskCallbacks = {
                {
                    toggle: this.toggleTask.bind(this),
                    add: this.addTask.bind(this),
                    delete: this.deleteTask.bind(this)
                }
            }

        />
    }
}
