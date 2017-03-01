import * as React from 'react';

interface IContactItemProps{
    contact: IContact,
    key: string
}

export class ContactItem extends React.Component<IContactItemProps, {}>{
    render(){
        return <li>{this.props.contact.name} - {this.props.contact.email}</li>
    }
}