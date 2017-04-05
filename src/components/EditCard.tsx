import * as React from 'react';
import { CardForm } from './CardForm';

interface IEditCardProps {
    cards: ICard[];
    router: any;
    cardCallbacks: any;
    params: any
}

export class EditCard extends React.Component<IEditCardProps, {}>{
    componentWillMount() {
        let card = this.props.cards.filter((card) => {
            card.id == this.props.params.card_id
        });
        this.setState({ ...card });
    }
    handleChange(value: ICard) {
        this.setState({ card: value });
    }
    handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        this.props.cardCallbacks.updateCard(this.state);
        this.props.router.push('/');
    }
    handleClose(e: React.KeyboardEvent<HTMLInputElement>) {
        this.props.router.push('/');
    }
    render() {
        return (
            <CardForm draftCard={this.state}
                buttonLabel="Edit Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
        )
    }
}    