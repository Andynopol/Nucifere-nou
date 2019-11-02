import React from 'react';
import Header from './header/Header';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

import Home from './home/Home';
import AnalizaPremergatoare from './analiza-prem/AnalizaPremergatoare';
import ProiecteInfiintare from './proiect-infiintare/ProiectInfiintare'
import SerciciiSpecializate from './servicii-specializate/ServiciiSpecializate';
import MaterialSaditor from './material-saditor/MaterialSaditor';
import MaterialeSiUtilaje from './materiale-si-utilaje/MaterialeSiUtilaje';

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
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <Home/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page ==='Analiza premergatoare'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <AnalizaPremergatoare/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Proiecte infiintare'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <ProiecteInfiintare/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Servicii specializate'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <SerciciiSpecializate/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Material Saditor'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <MaterialSaditor/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Materiale si utilaje'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <MaterialeSiUtilaje/>
                    <Footer />
                </div>
            );
        }
        else{
            this.state.page = 'Home'
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