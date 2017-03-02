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

    handleUserInput(searchItem: string){
        this.setState({filterText: searchItem});
    };
    render(){
        return <div>
            <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
            <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
        </div>
    }
}

