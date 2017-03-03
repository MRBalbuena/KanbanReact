import * as React from "react";
import {Card} from "./Card";

export interface IList {
    title: string;
    id: string;
    cards: any;       
    taskCallbacks: ITaskCallbacks;
};

export class List extends React.Component<IList, never>{
    render(){
        let cards = this.props.cards.map((card: any) => {            
            return <Card id={card.id} taskCallbacks={this.props.taskCallbacks} key={card.id} title={card.title}                 
                description={card.description} color={card.color} tasks={card.tasks}/> 
        });
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}