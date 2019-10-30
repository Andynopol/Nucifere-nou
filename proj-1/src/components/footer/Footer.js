import React from 'react';

import image from '../../img/facebook.jpg';

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <p>Telefon: 0736379864 , de luni pana vineri  intre orele 09.00 si 18.00 si sambata intre orele 09:00 si 12:00</p>
                <p>Email: nucifere@yahoo.com</p>
                <p>iosif.kiss@nucifere.com</p>
                <a href="https://www.facebook.com/iosif.kiss.9"><img src={image} /></a>
            </footer>
        );
    }
}