import React from 'react';
import Home from './Home';
import AnalizaPremergatoare from './analiza-prem/AnalizaPremergatoare';

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
        if(this.state.page === 'Home')
        {
            return(
                <Home onClick={this.changePage}/>
            );
        }
        else if(this.state.page === 'Analiza Premergatoare'){
            return(
                <AnalizaPremergatoare onClick={this.changePage}/>
            );
        }
    }

    changePage(newPage){
        console.log(this.state.page);
        this.setState({page: newPage});
    }
}