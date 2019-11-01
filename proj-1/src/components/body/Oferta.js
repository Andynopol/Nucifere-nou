import React from 'react';

import image from '../../img/buton-detalii.jpg';

export default class Oferta extends React.Component{
    render(){
        return(
            <div id="offer" className="wrapper">
                <p offerName={this.props.offerName} id="offer-name">
                    {this.props.offerName}
                </p>
                <p offerPrice={this.props.offerPrice} id="price">
                    {this.props.offerPrice}
                </p>
                <img id="details-button" src={image}/>
            </div>
        );
    }
}