import React from 'react';
import NavMenu from './NavMenu';

export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            scrolled: false,

        };
        this.handleOnClick = this.handleOnClick.bind(this);
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

    render(){
        return(
            <nav className={ this.state.scrolled ? 'nav-scrolled' : 'nav' }>
                <NavMenu onClick={this.handleOnClick} />
            </nav>
        );
    }

    handleOnClick(name){
        this.props.onClick(name);
        //console.log(name);
    }
}