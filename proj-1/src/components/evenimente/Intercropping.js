import React from 'react';

import image from '../../img/hazelnut.png';

export default class Intercropping extends React.Component{
    render(){
        return(
            <div style={{margin: 0, padding: 0}}>
                <p style={{marginTop: 0}} className="article">
                    2. <strong style={{fontSize: 14}}>Intercropping & Free-range</strong> : Despre culturi  intercalate  si productii zootehnice ce 
                    pot fi realizate in livada de nuc, astfel incat  proprietarii de livezi sa poata 
                    realiza  un venit din care sa poata sustine  intretinerea livezii de nuc pana la 
                    intrarea  pe rod:
                </p>

                <p style={{fontSize: 18, lineHeight: 1.5, paddingTop: 0, marginTop: 0}} className="article">
                    Culturi anuale
                    <br/>
                    Culturi bienale
                    <br/>
                    Arbusti
                    <br/>
                    Pomi fructiferi
                    <br/>
                    Pasari
                    <br/>
                    Animale
                </p>
                <p style={{paddingTop: 0, marginTop: 0}} className="article">
                    <ul id="workshop-list">
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Data workshopului: 23 mai 2015 </li>
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Locatie: Sibiu" </li>
                    </ul>
                </p>

            </div>
        );
    }
}