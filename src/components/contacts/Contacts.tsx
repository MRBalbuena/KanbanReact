/// <reference path="../../../typings/interfaces.d.ts" />

import * as React from 'react';
import {SearchBar} from './SearchBar';
import {ContactList} from './ContactList';

interface IContactsProps{
    contacts: IContact[];
}

export class Contacts extends React.Component<IContactsProps,{}>{
    render(){
        return <div>
            <SearchBar />
            <ContactList contacts={this.props.contacts}/>
        </div>
    }
}

