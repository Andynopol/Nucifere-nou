import React from 'react';
import MenuItem from '../MenuItem';

import image from '../../img/home.svg';

export default class NavMenu extends React.Component{
    constructor(props){
        super(props);
        this.handleImgClick = this.handleImgClick.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(name){
        this.props.onClick(name);
        //console.log(name);
    }

    handleImgClick(){
        this.props.onClick('Home');
    }

    render(){
        return(
            <ul className="nav-menu">
                <li className="nav-menu-item"><img onClick={this.handleImgClick} id="home-btn" src={image}/></li>
                <div className="item-wrapper">
                    <MenuItem onClick={this.handleOnClick} name="Proiecte" className="nav-menu-item" />
                    <div id="init-livezi-menu" className="dropdown-menu">
                        <ul className="dropdown-list">
                            <MenuItem onClick={this.handleOnClick} name="Proiecte finalizate" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Proiecte in derulare" className="dropdown-item" />
                        </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Infiintarea livezilor de nuc" className="nav-menu-item" />
                    <div id="init-livezi-menu" className="dropdown-menu">
                        <ul className="dropdown-list">
                            <MenuItem onClick={this.handleOnClick} name="Analiza premergatoare" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Proiecte infiintare" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Servicii specializate" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Material Saditor" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Materiale si utilaje" className="dropdown-item" />
                            {/* <MenuItem onClick={this.handleOnClick} name="Consultanta infiitare" className="dropdown-item" /> */}
                        </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Afaceri cu nuci" className="nav-menu-item" />
                    <div id="init-livezi-menu" className="dropdown-menu">
                        <ul className="dropdown-list">
                            <MenuItem onClick={this.handleOnClick} name="Livezi familiale" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Livezi comerciale" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Achizitii nuci" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Depozitarea nucilor" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Procesarea nucilor" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Comert en-gross" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Exportatori" className="dropdown-item" />
                        </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <MenuItem onClick={this.handleOnClick} name="Soiuri de nuci" className="nav-menu-item" />
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Evenimente" className="nav-menu-item" />
                    <div id="init-livezi-menu" className="dropdown-menu">
                        <ul className="dropdown-list">
                            <MenuItem onClick={this.handleOnClick} name="Conferinte zonale" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Prezentari exclusive" className="dropdown-item" />
                            <MenuItem onClick={this.handleOnClick} name="Workshop-uri" className="dropdown-item" />
                        </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <MenuItem onClick={this.handleOnClick} name="Magazin online" className="nav-menu-item" />
                </div>
                <div className="item-wrapper">
                    <MenuItem onClick={this.handleOnClick} name="Social" className="nav-menu-item" />
                </div>
            </ul>
        );
    }
}