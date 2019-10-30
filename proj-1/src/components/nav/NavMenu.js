import React from 'react';
import MenuItem from '../MenuItem';

import image from '../../img/buton_home.jpg';

export default class NavMenu extends React.Component{
    render(){
        return(
            <ul>
                <li className="nav-menu-item"><div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div></li>
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