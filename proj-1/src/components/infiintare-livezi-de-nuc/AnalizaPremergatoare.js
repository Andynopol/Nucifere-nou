import React from 'react';
import PageTitle from '../PageTitle';
import MenuItem from '../MenuItem';

export default class AnalizaPremergatoare extends React.Component{
    constructor(props){
        super(props);
        this.handleonClick = this.handleonClick.bind(this);
    }

    render(){
        return(
            <div className='page-wrapper'>
                <PageTitle name="Analiza premergatoare"/>
                <p className='article' id='first-pg'>
                    Daca ati luat decizia de a infiinta proprria dumneavoastra livada de nuci
                    : FELICITARI!  Ati luat o decizie inteleapta, dar pentru ca aceasta sa fie transpusa
                    in practica cu succes, primul pas  pe care il aveti de facut este acela de a face 
                    un set de analize pedologice, agrochimice, microbiologice  si agrometeorologice. 
                    Aceste analize stau la baza intocmirii unui studiu de prefezabilitate, in cadrul 
                    caruia se vor analiza datele despre sol  , clima si specii pomicole ce pot fi cultivate 
                    cu succes ( sau nu) in arealul dv. Fara aceste analize, practic este imposibil sa luati 
                    o decizie in cunostinta de cauza , lasandu-va la mana “hazardului”. Daca nu aveti bani 
                    de pierdut , aceste analize sunt absolut obligatorii, cu atat mai mult cu cat livezile 
                    mai mari de 2 hectare se infiinteaza- potrivit Legii Pomiculturii- numai in baza unui 
                    proiect tehnic de autorizare a plantarii.
                </p>
                <p className='article'>
                    <strong style={{paddingLeft: 10, fontSize:16}}>Buletine de analize obligatorii pentru infiintarea unei livezi de nuc</strong>
                    <ul style={{listStyle: 'square'}}>
                        <MenuItem className="item" name="studiul pedologic"/>
                        <MenuItem className="item" name="datele analitice ale unitatii de sol: analiza granulometrica, analizele fizice, analizele chimice"/>
                        <MenuItem className="item" name="studiul agrochimic: micro si macroelemente- complet pt elementele esentiale, saruri solubile, Carbonat de calciu activ, indicele de putere clorozanta + recomandari de fertilizare"/>
                        <MenuItem className="item" name="fisa climatologica"/>
                        <MenuItem className="item" name="buletin  de analize microbiologice"/>
                        <MenuItem className="item" name="fisa de bonitare a solului pentru culturile pomicole ( mar, par, prun , cires-visin, nuc)"/>
                    </ul>
                </p>
                <p className='article'>
                    <strong>Cine face aceste analize?</strong> Institutul de Cercetari Pedologice 
                    si Agrochimice  Bucuresti, prin reteaua sa nationala de  
                    <strong><a target='_blank' style={{color:'#2e4e08'}} className='link' href="https://www.icpa.ro//ospa.shtml"> Oficii Judetene pentru Studii Pedologice si Agrochimice</a></strong>
                </p>
                <p className='article'>
                    <strong>Ce fel de resurse de date sunt disponibile  in cadrul ICPA?</strong>
                </p>

                <p style={{fontSize: 12, paddingTop: 0, paddingBottom: 0}} className='article'>
                    Informatii privind resursele nationale de sol si de terenuri (baze de date si harti, majoritatea unice în România):
                </p>

                <p style={{paddingTop: 0}} className='article'>
                    <i>Sistemul informatic geografic al resurselor de sol si de teren agricol</i> (la scari diferite, ex: 1:10.000, 1:200.000, 1:500.000, 1:1.000.000);
                    <br/>
                    <i>Baze de date si harti de sol/teren si de bonitare a terenurilor agricole – la scara 1:50.000</i> (la nivel national) si 1:10.000 (cca. 40% din suprafata agricola a tarii);
                    <br/>
                    <i>Baza de date a profilelor de sol</i> (cca. 4200 profile, majoritatea descrise prin cca. 500/1000 parametri);
                    <br/>
                    <i>Harti de baza ale solurilor</i> (la scarile 1:10.000, 1:50.000, 1:200.000, 1:500.000, 1:1.000.000);
                    <br/>
                    <i>Harti tematice de sol</i> (eroziunea solurilor, exces de umiditate, salinitate/alcalinitate, pretabilitatea terenurilor la diferite folosinte si masuri tehnologice);
                    <br/>
                    <i>Baza de date a Monitoringului National al Calitatii Solurilor</i> (cca. 1000 profile de sol – in cadrul retelei regulate transeuropene 16 km x 16 km);
                    <br/>
                    <i>Baza de date a Monitoringului annual al principalelor calitati ale solurilor, la nivel judetean si national</i>;
                    <br/>
                    <i>Baza de date pedo-geochimica</i>;
                    <br/>
                    <i>Harta microzonelor pedoclimatice</i>;
                    <br/>
                    <i>Harta ecoregiunilor</i> (ecosistemelor)
                    <br/>
                    <i>Etc.</i>
                </p>
                <p style={{fontSize: 12}} className='article'>
                    <strong>Recomandare personala: </strong>
                    Avand in vedere calitatea lucrarilor de specialitate realizate de-a lungul timpului 
                    si expertiza in ceea ce priveste analizele specifice pentru cultura nucului, 
                    recomand calduros ca inainte de a face aceste analize, luati legatura cu dl 
                    Dr. Ing. Stefan Bakos, din cadrul OSPA Cluj Napoca, la tel 0752083390 sau prin 
                    email la adresa bakosstefan@yahoo.com
                </p>
            </div>
        );
    }

    handleonClick(name){
        this.props.onClick(name);
    }
}