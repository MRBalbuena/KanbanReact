import * as React from 'react';
import {ContactItem} from './ContactItem';

interface IContactListProps{
    contacts: IContact[];
}

export class ContactList extends React.Component<IContactListProps, {}>{
    render(){
        return <ul>
            {this.props.contacts.map((contact: any)=> {
                return <ContactItem key={contact.email} contact={contact}/>        
            })}
        </ul>        
    }
}