import React from 'react';
import Header from './header/Header';
import Nav from './nav/Nav';
import Home from './home/Home';
import Footer from './footer/Footer';
import AnalizaPremergatoare from './analiza-prem/AnalizaPremergatoare';
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
        console.log(this.state.page);
        if(this.state.page ==='Home'){
            return(
                <div className="container">
                    <Header />
                    <Nav onClick={this.changePage}/>
                    <Home/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page ==='Analiza premergatoare'){
            return(
                <div className="container">
                    <Header />
                    <Nav onClick={this.changePage}/>
                    <AnalizaPremergatoare/>
                    <Footer />
                </div>
            );
        }
        else{
            return(
                <div className="container">
                    <Header />
                    <Nav onClick={this.changePage}/>
                    <Home/>
                    <Footer />
                </div>
            );
        }
    }

    changePage(newPage){
        console.log(this.state.page);
        this.setState({page: newPage});
    }
}