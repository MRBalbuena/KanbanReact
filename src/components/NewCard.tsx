import * as React from 'react';
import { CardForm } from './CardForm';

interface INewCardState {
    card: ICard;
}
interface INewCardProps {
    router: any;
    cardCallbacks: any;
}
export class NewCard extends React.Component<INewCardProps, INewCardState>{
    componentWillMount() {
        this.setState({
            card: {
                id: Date.now(),
                title: '',
                description: '',
                status: 'todo',
                color: '#c9c9c9',
                tasks: []
            }
        });
    }

    handleChange(field: string, value: ICard) {
        this.setState({ card: value });
    }
    handleSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        this.props.cardCallbacks.addCard(this.state);
        this.props.router.push('/');
    }
    handleClose(e: React.KeyboardEvent<HTMLInputElement>) {
        this.props.router.push('/');
    }
    render() {
        return (
            <CardForm draftCard={this.state}
                buttonLabel="Create Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
        );
    }
}    
}