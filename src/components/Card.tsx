import * as React from "react";
import { CheckList } from "./CheckList";

export interface ICard {
    title: string;
    id: string;
    description: string;
    tasks: any;
}

export class Card extends React.Component<ICard, never>{
    render() {
        return (
            <div className="card">
                <div className="card__title">{this.props.title}</div>
                <div className="card_details">{this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            </div>
        )
    }
}