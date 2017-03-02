import * as React from 'react';

interface ISearchBarProps{
    filterText: string;
    onUserInput: (value: string) => void;
}
export class SearchBar extends React.Component<ISearchBarProps,{}>{
    handleChange(event: React.FormEvent<HTMLInputElement>){
        this.props.onUserInput(event.currentTarget.value);
    }
    render (){
        return <input type="search" placeholder="search" value={this.props.filterText} onChange={this.handleChange.bind(this)}/>
    }
}
