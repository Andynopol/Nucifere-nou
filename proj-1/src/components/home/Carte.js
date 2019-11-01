import React from 'react';

import image from '../../img/cartea.png';

export default class Carte extends React.Component{
    render(){
        return(
            <div id="book-homepage" className="wrapper">
                <div id="book-wrapper">
                    <img src={image} /> 
                </div>
                <div>
                    <h1 id="book-title">Carte</h1>
                    <p id="book-description">
                        Micile secrete determina marile rezultate. Cultura nucului nu face nici 
                        ea exceptie de la aceasta axioma, iar daca vreti ca afacerea dvs in acest 
                        domeniu sa fie supusa la cat mai putine riscuri e obligatoriu sa aveti 
                        aceasta lucrare!
                    </p>
                    <br/>
                    <strong id="book-more">afla mai multe</strong>
                </div>
            </div>
        );
    }
}