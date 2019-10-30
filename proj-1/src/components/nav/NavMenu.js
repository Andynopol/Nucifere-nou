import React from 'react';
import MenuItem from '../MenuItem';

export default class NavMenu extends React.Component{
    render(){
        return(
            <ul>
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