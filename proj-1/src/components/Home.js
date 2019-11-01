import React from 'react';
import Header from './header/Header';
import Nav from './nav/Nav';
import Left from './body/Left';
import Right from './body/Right';
import Footer from './footer/Footer';

import '../CSS/style.css';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    render(){
            return(
                <div className="home-container">
                    <Header />
                    <Nav onClick={this.handleOnClick} />
                    <Left />
                    <Right />
                    <Footer />
                </div>
            );
    }

    handleOnClick(name){
        this.props.onClick(name);
    }
}