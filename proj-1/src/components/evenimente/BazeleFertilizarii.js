import React from 'react';

import image from '../../img/hazelnut.png';

export default class BazeleFertilizarii extends React.Component{
    render(){
        return(
            <div style={{margin: 0, padding: 0}}>
                <p id='first-pg' className="article">
                    1. <strong style={{fontSize:14}}>Bazele fertilizarii si irigarii  livezilor de nuc</strong> :  Scopul acestui workshop este 
                    acela de a  pregati si informa cultivatorii asupra detaliilor unei fertilizari 
                    corecte a livezii de nuci, astfel incat acestia sa poata asigura un echilibru 
                    corespunzator intre  cresterile vegetative ,  diferentierea mugurilor floriferi si 
                    necesitatea maturarii lemnului  pana la intrarea in dormans a pomilor.  
                    Informatiile transferate permit cultivatorilor de nuci sa evite greselile care pot 
                    determina sensibilizarea pomilor la atacul bacteriozei si al antracnozei , precum si 
                    la gerurile de peste iarna. Regimul de fertilizare si de irigare  determina printre 
                    altele si productia efectiva a livezii de nuc.
                </p>
                <p className="article">
                    Participantii vor invata despre:
                </p>
                <p style={{fontSize: 18, lineHeight: 1.5, paddingTop: 0, marginTop: 0}} className="article">
                    Fertilizarea de fond a terenului pentru infiinţarea unei livezi de nuc
                    <br/>
                    Fertilizarea livezii tinere: fertilizări pentru dezvoltarea şi pomului
                    <br/>
                    Fertilizarea livezii aflate pe rod: Asigurarea echilibrului dintre cresterea vegetativa, fructificatie optima şi maturarea lemnului
                    <br/>
                    Fertilizări în pomicultura integrată
                    <br/>
                    Regimul hidric al culturii de nuc: Sursa de apa. Analize. Doze/fenofaze.
                </p>
                <p style={{paddingTop: 0, marginTop: 0}} className="article">
                    <ul id="workshop-list">
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Data workshopului: 18 aprilie 2015 </li>
                        <li style={{fontSize: 14, fontWeight: 'bold'}}> <img className="hazelnut-list-style" src={image}/> Locatie: Cluj-Napoca" </li>
                    </ul>
                </p>
            </div>
        );
    }
}