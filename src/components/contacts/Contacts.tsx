/// <reference path="../../../typings/interfaces.d.ts" />

import * as React from 'react';
import {SearchBar} from './SearchBar';
import {ContactList} from './ContactList';

interface IContactsProps{
    contacts: IContact[];
}

export interface IContactsState{
    filterText: string;
}

export class Contacts extends React.Component<IContactsProps,IContactsState>{
    public state: IContactsState;
    constructor(){
        super();
        this.state = {
            filterText: ''
        };
    }
    render(){
        return <div>
            <SearchBar filterText={this.state.filterText}/>
            <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
        </div>
    }
}

