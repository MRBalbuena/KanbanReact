import * as React from "react";
import { CheckList } from "./CheckList";

export interface ICard {
    title: string;
    id: string;
    description: string;
    tasks: any;
}

export interface IState {
    showDetails: boolean;
}

export class Card extends React.Component<ICard, IState>{
    public state: IState;
    constructor() {
        super();
        this.state = { showDetails: false };

    };
    render() {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card_details">{this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            )
        };
        return (
            <div className="card">
                <div className="card__title" key={this.props.id} onClick={
                    () => {                        
                        this.setState({ showDetails: !this.state.showDetails })
                    }
                }>{this.props.title}</div>
                {cardDetails}
            </div>
        )
    }
}