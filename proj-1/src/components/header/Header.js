import React from 'react';
import image from '../../img/logo.jpg';
import Slider from './Slider';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    render(){
        return(
            <header>
                <div id="logo-wrapper">
                    <img id="logo" onClick={this.handleOnClick} src={image} />
                </div>
                <Slider />
                
            </header>
        );
    }

    handleOnClick(){
        this.props.onClick('Home');
    }
}