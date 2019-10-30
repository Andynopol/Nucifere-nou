import React from 'react';
import NavMenu from './NavMenu';
import MenuItem from '../MenuItem';

export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            scrolled: false,

        };
    }

    componentWillMount(){
        window.addEventListener('scroll',()=>{
            const isTop = window.scrollY < 100;
            !isTop?
                this.setState({ scrolled: true })
            :
                this.setState({ scrolled: false });
            console.log(window.scrollY);
        })
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    componentDidMount(){

    }

    render(){
        return(
            <nav className={ this.state.scrolled ? 'nav-scrolled' : 'nav' }>
                <NavMenu />
            </nav>
        );
    }

}