import * as React from "react";
import {Card} from "./Card";

export interface IList {
    title: string;
    id: string;
    cards: any;    
};

export class List extends React.Component<IList, never>{
    render(){
        var cards = this.props.cards.map((card: any) => {            
            return <Card id={card.id} key={card.id} title={card.title} 
                description={card.description} tasks={card.tasks}/> 
        });
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}