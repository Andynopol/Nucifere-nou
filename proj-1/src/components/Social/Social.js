import React from 'react';
import PageTitle from '../PageTitle';

export default class Social extends React.Component{
    render(){
        const link = "http://www.nucifere.com/wp-content/uploads/2011/02/CPARSD_raport_sinteza.pdf";
        return(
            <div className="page-wrapper">
                <PageTitle name="Responsabilitate Sociala" />
                <p id="first-pg" className="article">
                    In data de 13.01.2009 aparea o <strong>Decizie privind infiintarea Comisiei Prezidentiale 
                    pentru Analiza Riscurilor Sociale si Demografice din Romania</strong>, semnata de Presedintele 
                    Romaniei Dl.Traian Basescu. Important de retinut din aceasta Decizie este continutul 
                    articolelor 3 si 4, respectiv :<br/>
                    Art. 3
                    <br/>
                    <br/>
                    Scopul Comisiei este acela de a analiza situaţia actualã în ceea ce priveşte riscurile 
                    sociale şi demografice majore la care este expusã populaţia României în ansamblu, dar si 
                    anumite segmente sociale vulnerabile, precum şi de a identifica soluţiile alternative 
                    pentru reducerea inechitãţilor şi riscurilor sociale în contextul apartenenţei României 
                    la UE şi al crizei economice mondiale.
                    <br/>
                    <br/>
                    Art. 4
                    <br/>
                    <br/>
                    Comisia are un caracter pluridisciplinar, fiind compusã din experţi în politici 
                    sociale, asistenţã socialã, demografie, statisticã socialã şi alte domenii conexe 
                    recunoscuţi pentru activitatea lor în domeniul riscurilor sociale şi demografice.
                    <br/>
                    Anexa nr.1, cuprinzând membrii comisiei, face parte din prezenta Decizie.
                    <br/>
                    <br/>
                    Aparent, aceasta decizie isi are locul aici, pe un site dedicat nuciferelor, ” ca 
                    nuca in perete” . Asta doar la o prima vedere, pentru ca , fara urma de patima si 
                    fara coloratura politica, aceasta Comisie Prezidentiala a intocmit un raport de 
                    analiza a riscurilor sociale si demografice din Romania prezenta si viitoare, in 
                    doua variante: una extinsa si una de sinteza . Ambele sunt de citit si de meditat 
                    serios asupra lor.
                    <br/>
                    <br/>
                    Asa cum spuneam si aici , viitorul asigurarilor sociale din Romania nu va fi tocmai 
                    luminos, tendintele de scadere a populatiei active si de imbatranire vor fi extrem de 
                    accentuate . Astfel , populatia de varsta a treia si a patra va fi de 3 ori mai 
                    numeroasa in 2030 decat in anul 1990, in timp ce populatia activa va fi mult redusa.
                    <br/>
                    <br/>
                    Tocmai din acest punct de vedere consider ca infiintarea de livezi de nuc este mai mult 
                    decat o necesitate pentru orice persoana care acum este activa, atat din perspectiva 
                    starii generale de sanatate cat si din perspectiva asigurarii unei surse de venit 
                    consistente independente de sistemul asigurarilor sociale .
                    <br/>
                    <br/>
                    In data de 25 octombrie 2009 , cotidianul Evenimentul Zilei a abordat cu mult curaj si 
                    multa responsabilitate subiectul continutului real al produselor si preparatelor din 
                    carne ce comercializeaza in Romania . E un articol ce ar trebui citit de catre toti 
                    aceia care consuma in mod frecvent asemenea produse ce pun in pericol grav sanatatea 
                    populatiei.
                    <br/>
                    <br/>
                    <strong><a target='_blank' style={{color:'#2e4e08'}} className='link' href={link}> Sinteza raport </a></strong>
                </p>
            </div>
        );
    }
}