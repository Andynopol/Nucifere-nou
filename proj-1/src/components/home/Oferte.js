import React from 'react';
import Oferta from './Oferta';
import Notes from './Notes';

export default class Oferte extends React.Component{
    render(){
        return(
            <div id="offers-wrapper" className="wrapper">
                <Oferta 
                    offerName="Orientare profesională pentru de elevi și studenți ( grupuri organizate)"
                    offerPrice="numai 10 €/persoană"
                />

                <Oferta
                    offerName="Workshopuri tematice pentru marii fermieri și investitori în agricultură"
                    offerPrice="numai 599 eur/persoană/workshop"
                />
                
                <Notes/>
            </div>
        );
    }
}