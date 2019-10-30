import React from 'react';
import Header from './header/Header';
import Nav from './nav/Nav';
import Left from './left/Left';
import Right from './right/Right';
import Footer from './footer/Footer';

import '../CSS/style.css';

export default class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page:'Home'
        }
        this.changePage = this.changePage.bind(this)
    }
    render(){
        if(this.state.page === 'Home'){
            return(
                <div className="container">
                    <Header />
                    <Nav />
                    <Left />
                    <Right />
                    <Footer />
                </div>
            );
        }
    }

    changePage(newPage){
        this.setState({page:newPage});
    }
}