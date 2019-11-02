import React from 'react';
import PageTitle from '../PageTitle';

export default class ProiectInfiintare extends React.Component{
    render(){
        return(
            <div className='page-wrapper'>
                <PageTitle name="Proiectul tehnic de autorizare a plantarii unei livezi de nuc"/>
                <p className='article'>
                    Potrivit <strong><a className='link' style={{color:'#2e4e08'}} target='+_blank' herf='http://www.dreptonline.ro/legislatie/legea_pomiculturii_348_2003_republicat_2008.php'> Legii pomiculturii, legea nr. 348/2003, republicata 2008</a></strong>, pentru plantatiile 
                    cu suprafata mai mare de 2 (doua) hectare autorizatia de plantare se elibereaza in baza 
                    unui proiect de infiintare a plantatiei pomicole elaborat de persoane autorizate si 
                    avizat de institutul de cercetare-dezvoltare pentru pomicultura sau de statiunea de 
                    cercetare-dezvoltare pomicola.
                </p>

                <p className='article'>
                    In cazul livezilor de nuc, avand in vedere faptul ca aceasta specie este una din 
                    speciile protejate prin lege, in cadrul proiectelor tehnice  intocmite pentru 
                    eliberarea autorizatiei de plantare  vor putea fi folosite soiurile de nuc din 
                    conveierul national si european, cu precizarea ca alegerea soiului sa se faca numai 
                    in urma analizei caracteristicilor fiziologice si comportamentale ale portaltoilor si 
                    al soiurilor altoite. Aceasta observatie este necesara in masura in care  anumiti 
                    portaltoi sau anumite soiuri prezinta sau nu sensibilitati la  factorii pedologici, 
                    agrochimici si agro-meteorologici (temperaturi, precipitatii, miscarea maselor de aer) 
                    de la locul de plantare.
                </p>

                <p style={{paddingBottom: 0, paddingTop: 0}} className='article'>
                    In demersul de proiectare este absolut obligatoriu ca proiectantul sa coreleze 
                    datele legate de configuratia terenului, clima, sol si caracterele portaltoilor 
                    si alsoiurilor de nuc, astfel incat solutia tehnica oferita sa corespunda atat  din 
                    punct de vedere al compatibilitatii dintre portaltoi si soi, de conditiile pedoclimatice, 
                    cat si cu obiectivele de productie stabilite de comun acord cu beneficiarul.
                </p>

                <p style={{paddingBottom: 0, paddingTop: 0}} className='article'>
                    In cadrul procesului de proiectare se va tine cont  in mod obligatoriu de concluziile 
                    Studiului de prefezabilitate, din care sa rezulte  soiul, portaltoiul, 
                    schema de plantare, lucrarile de intretinere si cele de modificare a 
                    numarului de pomi/hectar ( daca este cazul, dupa x ani de la plantare).
                </p>

                <p style={{paddingBottom: 0, paddingTop: 0}} className='article'>
                    In mod obligatoriu, proiectul tehnic include si ante-calculatiile/devizele de cost 
                    pentru  toate operatiunile presupuse de infiintarea acestei livezi.
                </p>

                <p style={{fontSize: 12}} className='article'>
                    Daca doriti sa colaboram pentru intocmirea proiectului tehnic pentru autoziarea 
                    plantarii unei livezi de nuc, va rog sa transmiteti o solicitare scrisa la adresa 
                    de email iosif.kiss@nucifere.com .
                </p>
            </div>
        );
    }
}