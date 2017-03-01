import * as React from 'react';
import {ContactItem} from './ContactItem';

interface IContactListProps{
    contacts: IContact[];
    filterText: string;
}

export class ContactList extends React.Component<IContactListProps, {}>{
    render(){
        let filteredContacts = this.props.contacts.filter((contact)=>{
            return contact.name.indexOf(this.props.filterText) != -1
        });
        return <ul>
            {filteredContacts.map((contact: any)=> {
                return <ContactItem key={contact.email} contact={contact}/>        
            })}
        </ul>        
    }
}