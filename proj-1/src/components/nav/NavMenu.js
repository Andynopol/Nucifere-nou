import React from 'react';
import MenuItem from '../MenuItem';

import image from '../../img/home.svg';

export default class NavMenu extends React.Component{
    render(){
        return(
            <ul>
                <li className="nav-menu-item"><img src={image}/></li>
                <MenuItem name="Home" className="nav-menu-item" />
                <MenuItem name="Infiintarea livezilor de nuc" className="nav-menu-item" />
                <MenuItem name="Afaceri cu nuci" className="nav-menu-item" />
                <MenuItem name="Soiuri de nuci" className="nav-menu-item" />
                <MenuItem name="Evenimente" className="nav-menu-item" />
                <MenuItem name="Magazin online" className="nav-menu-item" />

            </ul>
        );
    }
}