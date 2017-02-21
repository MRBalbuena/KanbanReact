import * as React from "react";
import {CheckList} from "./CheckList";
import * as marked from 'marked';

export interface ICard {
    title : string;
    id : string;
    description : string;
    tasks : any;
}

export interface IState {
    showDetails : boolean;
}

export class Card extends React.Component < ICard,IState > {
    public state : IState;
    constructor() {
        super();
        this.state = {
            showDetails: false
        };
    };
    toogleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        });
    };
    render() {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card_details">
                    <span dangerouslySetInnerHTML={{__html: marked(this.props.description)}} />
                    <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
                </div>
            )
        };

        return (
            <div className="card">
                <div
                    className={this.state.showDetails
                    ? "card__title--is-open"
                    : "card__title"}
                    key={this.props.id}
                    onClick={this
                    .toogleDetails
                    .bind(this)}>
                    {this.props.title}</div>
                {cardDetails}
            </div>
        )
    }
}