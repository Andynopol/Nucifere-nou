import React from 'react';

export default class MenuItem extends React.Component{
    render(){
        return(
            <li name={this.props.name} className={this.props.className}>{this.props.name}</li>
        );
    }
}