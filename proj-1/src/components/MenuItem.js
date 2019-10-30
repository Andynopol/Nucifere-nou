import React from 'react';

export default class MenuItem extends React.Component{
    render(){
        return(
            <li id={this.props.id} name={this.props.name} className={this.props.className}>{this.props.name}</li>
        );
    }
}