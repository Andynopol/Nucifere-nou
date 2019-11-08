import React from 'react';
import PageTitle from '../PageTitle';
import BazeleFertilizarii from './BazeleFertilizarii';
import Intercropping from './Intercropping';
import Taieri from './Taieri';

import image from '../../img/hazelnut.png';

export default class Workshop extends React.Component{
    render(){
        return(
            <div className="page-wrapper">
                <PageTitle name="Workshop-uri" />
                <BazeleFertilizarii/>
                <Intercropping />
                <Taieri />
                <p style={{paddingTop: 0, marginTop: 0}} className="article">
                    <ul id="workshop-list">
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Taxa de participare: 790 RON / Workshop</li>
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Numar maxim participanti: 20 / Workshop</li>
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Inscrieri prin email la adresa: iosif.kiss@nucifere.com </li>
                    </ul>
                </p>
                <p style={{fontWeight: 'bold'}} className='article'>
                    Persoanele care doresc sa participe la 2 workshopuri au reducucere de 20%, iar cele ce doresc sa participe la 3 workshopuri au reducere de 30%!
                </p>
            </div>
        );
    }
}