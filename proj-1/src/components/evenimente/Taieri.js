import React from 'react';

import image from '../../img/hazelnut.png';

export default class Taieri extends React.Component{
    render(){
        return(
            <div style={{margin: 0, padding: 0}}>
                <p className="article">
                    3. <strong style={{fontSize: 14}}>Taierile nucului</strong> . Scopul acestui workshop este  de a 
                    identifica diferentele dintre un frizer si  un nucicultor: taierile de formare a tulpinii si a coroanei & taierile de fructificatie la nuc:
                </p>
                <p style={{fontSize: 18, lineHeight: 1.5, paddingTop: 0, marginTop: 0}} className="article">
                    Forme de conducere a coroanei
                    <br/>
                    Taieri de fructificare
                    <br/>
                    Taieri de generare a lastarilor  pentru altoit
                    <br/>
                    Taieri de regenerare
                    <br/>
                </p>

                <p style={{paddingTop: 0, marginTop: 0}} className="article">
                    <ul id="workshop-list">
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Data workshopului: 29 august 2015 </li>
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Locatie: N/A" </li>
                    </ul>
                </p>
            </div>
        );
    }
}