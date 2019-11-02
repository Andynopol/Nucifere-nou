import React from 'react';
import PageTitle from '../PageTitle';

import image1 from '../../img/Livada-de-nuci.jpg';
import image2 from '../../img/E-vremea-recoltei.jpg';

export default class LiveziComerciale extends React.Component{
    render(){
        return(
            <div className='page-wrapper'>
                <PageTitle name="Livezi Comerciale"/>
                <p id='first-pg' className='article'>
                    <img id="livada-img" src={image1}/>
                    Livezile comerciale sunt acele livezi realizate pe suprafete mai mari de 10 hectare si care, de obicei, sunt administrate de catre o persoana juridica.
                    Productia obtinuta este supusa in mod obligatoriu proceselor de conditionare, procesare, depozitare, industrializare si comercializare intr-un cadru organizat.
                    Daca in cazul livezilor familiale proprietarii acestora nu sunt dispusi intotdeauna sa investeasca in utilaje si capacitati performante de conditionare, depozitare si procesare, in cazul livezilor comerciale acest lucru devine imperativ datorita faptului ca o pierdere de 20% din productia unei livezi mature reprezinta contravaloarea tuturor acestor utilaje de conditionare.
                    <br/>
                    <br/>
                    Un alt argument pentru realizarea propriei capacitati de conditionare-depozitare-procesare este acela al valorii adaugate net superioare pe intreg ciclul descris. Iata o asemenea exploatatie comerciala din Franta
                    <br/>
                    <br/>
                    Nu este totuna sa vinzi o nuca neprocesata ( cu sub un euro pe kilogram) cu vanzarea miezului de nuca alb-galbui uniform, lipsit de mucegaiuri. Poate fi o diferenta de cel putin 200% in privinta pretului de valorificare.
                    <br/>
                    <br/>
                    Din punct de vedere legal, infiintarea unei livezi comerciale poate avea loc numai cu puieti achizitionati dintr-o pepiniera autorizata.
                </p>
                <p className='article'>
                    <img style={{float: 'left', height: 210, marginRight: 10, marginLeft: 0}} id="livada-img" src={image2}/>
                        In linii mari, infiintarea unei livezi comerciale presupune derularea urmatorilor pasi absolut obligatorii:
                        <br/>
                        1. Realizarea unui studiu pedologic pentru relevarea caracteristicilor fizico-chimice ale solului;
                        <br/>
                        2. Analiza datelor de agro-meteorologie specifice locului de plantare pentru ultimii 10 ani. In functie de nivelul anual al precipitatiilor, de data aparitiei primului si ultimului inghet, de amplitudinea termica caracteristica perioadei cuprinsa intre sfarsitul iernii si primavara ( definita ca fiind variatia termica de la zi la noapte in 24 de ore consecutive), se alege soiul cel mai potrivit pentru zona in care doriti sa realizati livada;
                        <br/>
                        3. Alegerea propriu-zisa a soiului de nuci si a polenizatoului corespunzator;
                        <br/>
                        4. Intocmirea proiectului tehnic de autorizare. Acesta include descrierea schemei de plantare, nominalizarea soiului ce va fi utilizat , precum si normativul de lucrari si recomandari esentiale in privinta acestora. Acesta trebuie intocmit numai de catre specialisti autorizati in acest sens. In baza acestui proiect tehnic de infiintare a viitoarei livezi , Directia Agricola Judeteana va elibera autorizatia de plantare a livezii.
                        <br/>
                        5. Infiintarea propriu-zisa a livezii, conform specificatiilor si recomandarilor incluse in proiectul tehnic de autorizare.
                        <br/>
                        <br/>
                        <strong style={{textTransform: 'uppercase'}}>PENTRU VALORIFICAREA PRODUCTIEI DE NUCI RECOMAND CALDUROS ASOCIEREA MAI MULTOR PRODUCATORI PENTRU INFIINTAREA UNUI GRUP DE PRODUCATORI, DATORITA FAPTULUI CA STATUL ROMAN SI UNIUNEA EUROPEANA SUSTIN MATERIAL ACEST DEMERS PRIN SUBVENTIONAREA A PESTE 70% DIN COSTURILE PRESUPUSE DE ACHIZITIONAREA UTILAJELOR DE PROCESARE.</strong>
                </p>
            </div>
        );
    }
}