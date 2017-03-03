import * as React from "react";
import { KanbanBoard } from './KanbanBoard';
import * as rp from 'request-promise';


interface KanbanBoardContainerState {
    cards: any;
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

    render() {
        return <KanbanBoard cards={this.state.cards} />
    }
}