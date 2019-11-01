import React from 'react';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Container from './Container';

export default class AnalizaPremergatoare extends React.Component{
    constructor(props){
        super(props);
        this.handleonClick = this.handleonClick.bind(this);
    }

    render(){
        return(
            <div>
                <Container/>
            </div>
        );
    }

    handleonClick(name){
        this.props.onClick(name);
    }
}