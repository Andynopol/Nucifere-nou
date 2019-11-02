import React from 'react';

export default class TitlePage extends React.Component{
    render(){
        return(
            <h1 id='page-title' name={this.props.name}>{this.props.name}</h1>
        );
    }
}