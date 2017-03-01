import * as React from 'react';

interface ISearchBarProps{
    filterText: string;
}
export class SearchBar extends React.Component<ISearchBarProps,{}>{
    render (){
        return <input type="search" placeholder="search" value={this.props.filterText}/>
    }
}
