import React from 'react';
import image from '../../img/logo.jpg';
import Slider from './Slider';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div id="logo-wrapper">
                    <img id="logo" src={image} />
                </div>
                <Slider />
                
            </header>
        );
    }
}