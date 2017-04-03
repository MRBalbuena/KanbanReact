import * as React from 'react';

interface CardFormProps {
    draftCard: any;
    buttonLabel: string;
    handleChange: (field: string, e: string) => void;
    handleSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleClose: () => void;
}

export class CardForm extends React.Component<CardFormProps, {}>{
    handleChange(field: string, e: React.KeyboardEvent<HTMLInputElement>) {
        this.props.handleChange(field, e.currentTarget.value);
    }

    handleClose(e: React.KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        this.props.handleClose();
    }

    render() {
        return (
            <div>
                <div className="card big">
                    <form onSubmit={this.props.handleSubmit.bind(this)}>
                        <input type='text'
                            value={this.props.draftCard.title}
                            onChange={this.handleChange.bind(this, 'title')}
                            placeholder="Title"
                            required={true}
                            autoFocus={true} />
                        <textarea value={this.props.draftCard.description}
                            onChange={this.handleChange.bind(this, 'description')}
                            placeholder="Description"
                            required={true} />
                        <label htmlFor="status">Status</label>
                        <select id="status"
                            value={this.props.draftCard.status}
                            onChange={this.handleChange.bind(this, 'status')}>
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                        <br />
                        <label htmlFor="color">Color</label>
                        <input id="color"
                            value={this.props.draftCard.color}
                            onChange={this.handleChange.bind(this, 'color')}
                            type="color"
                            defaultValue="#ff0000" />
                        <div className='actions'>
                            <button type="submit">{this.props.buttonLabel}</button>
                        </div>
                    </form>
                </div>
                <div className="overlay" onClick={this.handleClose.bind(this)}>
                </div>
            </div>
        );
    }
}    
}