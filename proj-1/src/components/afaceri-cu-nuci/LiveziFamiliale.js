import React from 'react';
import PageTitle from '../PageTitle';

import image from '../../img/Poza-livada.jpg'

export default class LiveziFamiliale extends React.Component{
    render(){
        return(
            <div className='page-wrapper'>
                <PageTitle name="Livezi Familiale"/>
                <p id='first-pg' className='article'>
                    <img className="livada-img" src={image}/>
                    Livezile familiale sunt acele livezi realizate  pe suprafete mici, astfel incat 
                    terenurile detinute de o familie sa fie valorificate cat mai bine.
                    Din punctul de vedere al dimensiunii, o livada familiala are o marime 
                    cuprinsa intre 0,1 si 10 hectare.
                    <br/>
                    <br/>
                    Productia obtinuta este destinata in principal auto-consumului si 
                    comercializarii prin piete, targuri si oboare.
                    Din punct de vedere legal, infiintarea unei livezi familiale poate 
                    avea loc  numai cu puieti achizitionati dintr-o pepiniera autorizata.
                    <br/>
                    <br/>
                    Daca se urmareste obtinerea unei productii constante si consistente in timp, 
                    este recomandata infiintarea livezilor familiale numai cu puieti altoiti proveniti 
                    din pepiniere autorizate pentru producerea materialului saditor.
                    <br/>
                    <br/>
                    Daca se urmareste reducerea costurilor intiale de infiintare a unei livezi de nuc 
                    familiale, se poate opta pentru infiintarea acestei livezi sa se utilizeze puiet de 
                    nuc selectionat ( nealtoit). In aceasta situatie va puteti astepta ca primele fructe 
                    sa fie produse dupa un interval de timp cuprins intre 8 si 10 ani de la plantarea 
                    in livada.  Din acest punct de vedere este mult mai eficient sa se infiinteze o 
                    livada familiala cu puiet altoit obtinut intr-o pepiniera autorizata, care incep sa 
                    rodeasca inca din anul 3-4, urmand ca din anul 7-8 sa se apropie de potentialul 
                    productiv al soiului pentru care se opteaza la infiintare.
                    <br/>
                    <br/>
                    Persoanele interesate sa pastreze productia de nuci in conditii optime pe termen 
                    lung  se pot informa despre activitatile de conditionare si depozitare.
                </p>
            </div>
        );
    }
}