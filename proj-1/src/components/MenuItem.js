import React from 'react';

export default class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render(){
        return(
            <li onClick={this.handleOnClick} id={this.props.id} name={this.props.name} className={this.props.className}>{this.props.name}</li>
        );
    }

    handleOnClick(){
        if(typeof(this.props.onClick) === 'function'){
            this.props.onClick(this.props.name)
            //console.log(this.props.name);
        }
    }
}