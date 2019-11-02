import React from 'react';
import PageTitle from '../PageTitle';

import image1 from '../../img/Spalatul-nucilor.jpg';
import image2 from '../../img/Uscator.jpg';
import Left from '../home/Left';

export default class DepozitareNuci extends React.Component{
    render(){
        return(
            <div className='page-wrapper'>
                <PageTitle name='Depozitare Nuci'/>
                <p id='first-pg' className="article">
                    <img style={{float: 'left', marginRight:10, height:280, width: 200}} className='livada-img' src={image1} />
                    1. Spalarea nucilor : Dupa recoltare , se aleg nucile care sunt inca cu coaja verde de cele care sunt fara coaja si curate. Nucile pe care mai sunt coji deverzi se baga in saci de urzica sau canepa si se umezesc bine, dupa care se depoziteaza pentru 1-2 zile la umbra. Dupa acest interval , coajaverde se desprinde cu usurinta de nuca. Frunctele pe care sunt vizibile pete de suc verde de coaja se spala imediat, cate 2-3 minute in apa rece.
                    <br/>
                    2. Uscarea nucilor: se face sub jet de aer cald sau in locuri foarte bine ventilate. Nucile seaseaza in straturi de maxim 25 cm grosime in locuri foarte bine ventilate si seravasesc de 3-4 ori pe zi. Pot fi uscate si la soare.
                    <br/>
                    3. Dezinfectarea & albirea nucilor: Datorita faptului ca pe piata internationala se cere ca miezul sa aiba o culoare galben-aurie se impune albirea nucilor. De asemenea, acest lucru determina practic si dezinfectarea nucilor de sporii de mucegai ce pot rezulta in urma proceselor de putrefactie a urmelor de mezocarp. Pentru cantitatile mici de nuci se procedeaza in modul urmator: se iau 6 kg de hipoclorit de calciu si 3,5 kg de carbonat de sodiu, la 10 litri de apa, ce se dizolva separat; se toarna apoi solutia de carbonat de calciu peste solutia de hipoclorit , dupa care se completeaza pana la cantitatea de 100 de litri. Solutia astfel obtinuta se amesteca bine de tot, dupa care se lasa 48 de ore sa se limpezeasca, dupa care se decanteaza solutia limpede. Nucile uscate se pun intr-un vas de lemn , dupa care se toarna solutie pana cand acestea incep sa pluteasca. Se agita bine timp de 3-5 minute. Daca in urma acestei operatiuni nucile nu sunt inalbite corespunzator se adauga2,5 litri de otet pentru 100 de kg de solutie. Cu 100 litri de solutie se pot inalbi aproximativ 400 de kg de nuci in coaja. Nucile nu se spala dupa ce sunt scoase din solutie si se usuca in mod obisnuit. (I.F. Radu-1939)
                    <br/>
                    4. Ambalarea nucilor: In vederea depozitarii, nucile se ambaleaza in saci de minim 25 de kg si maxim 200 de kg, in spatii curate, bine ventilate si ferite de rozatoare
                </p>
                <p style={{paddingTop:0}} className='article'>
                    <img style={{height:210}} className='livada-img' src={image2} />
                    5. Depozitarea propriu-zisa : poate avea loc pana la 2 ani , daca s-au respectat corespunzator cerintele de spalare si dezinfectare. este recomandabila depozitarea nucilor numai in coaja. Miezul de nuca curat este recomandat sa fie valorificat intr-o perioada de timp cuprinsa intre 30 si 60 de zile, numai in conditiile in care acesta este ambalat in cutii de carton cu hartie pe interior sau in saci de polietilena vidati.
                    <br/>
                    <br/>
                    Respectarea intocmai a acestor operatiuni conduce la pastrarea corespunzatoare a calitatii miezului de nuca. Astfel acesta ramane cu o culoare alb-galbuie pentru o perioada de timp de pana la 2 ani de zile. In cazul in care aceste operatiuni nu sunt realizate la timp, calitatea miezului de nuca se va deprecia prin schimbarea culorii miezului de nuca din alb-galbui intr-o culoare brun-roscata spre negru. Acest lucru este determinat de aparitia sporilor de mucegai. De asemenea , daca nu sunt respectate aceste operatiuni exista posibilitatea foarte ridicata de aparitie a viermilor care compromit total calitatea miezului de nuca. Si nu in ultimul rand, este demn de retinut ca o nuca tratata corespunzator garanteaza obtinerea unui pret de valorificare superior, ceea ce justifica pe deplin efectuarea corecta, completa si la timp a acestor operatiuni de curatare, dezinfectare si depozitare.
                </p>
            </div>
        );
    }
}