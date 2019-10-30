import React from 'react';
import MenuItem from '../MenuItem';

import image from '../../img/home.svg';

export default class NavMenu extends React.Component{
    render(){
        return(
            <ul className="nav-menu">
                <li className="nav-menu-item"><img id="home-btn" src={image}/></li>
                <div className="item-wrapper">
                    <MenuItem name="Proiecte" className="nav-menu-item" />
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Infiintarea livezilor de nuc" className="nav-menu-item" />
                    <div id="init-livezi-menu" className="dropdown-menu">
                        <ul className="dropdown-list">
                            <MenuItem name="Analiza premergatoare" className="dropdown-item" />
                            <MenuItem name="Proiecte infiintare" className="dropdown-item" />
                            <MenuItem name="Servicii specializate" className="dropdown-item" />
                            <MenuItem name="Material Saditor" className="dropdown-item" />
                            <MenuItem name="Materiale si utilaje" className="dropdown-item" />
                            <MenuItem name="Consultanta infiitare" className="dropdown-item" />
                        </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Afaceri cu nuci" className="nav-menu-item" />
                    <div id="init-livezi-menu" className="dropdown-menu">
                        <ul className="dropdown-list">
                            <MenuItem name="Livezi familiale" className="dropdown-item" />
                            <MenuItem name="Livezi comerciale" className="dropdown-item" />
                            <MenuItem name="Achizitii nuci" className="dropdown-item" />
                            <MenuItem name="Depozitarea nucilor" className="dropdown-item" />
                            <MenuItem name="Procesarea nucilor" className="dropdown-item" />
                            <MenuItem name="Comert en-gross" className="dropdown-item" />
                            <MenuItem name="Exportatori" className="dropdown-item" />
                        </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Soiuri de nuci" className="nav-menu-item" />
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Evenimente" className="nav-menu-item" />
                    <div id="init-livezi-menu" className="dropdown-menu">
                        <ul className="dropdown-list">
                            <MenuItem name="Conferinte zonale" className="dropdown-item" />
                            <MenuItem name="Prezentari exclusive" className="dropdown-item" />
                            <MenuItem name="Workshop-uri" className="dropdown-item" />
                        </ul>
                    </div>
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Magazin online" className="nav-menu-item" />
                </div>
                <div className="item-wrapper">
                    <MenuItem name="Social" className="nav-menu-item" />
                </div>
            </ul>
        );
    }
}