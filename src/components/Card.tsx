import * as React from "react";
import {CheckList} from "./CheckList";
import * as marked from 'marked';

export interface ICard {
    title : string;
    id : string;
    description : string;
    color: string;
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

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };

        return (
            <div className="card">
                <div style={sideColor}/>
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