import React from 'react';
import Oferte from './Oferte';
import Carte from './Carte';
import Project from './Project';

export default class Left extends React.Component{
    render(){
        return(
            <section className="left">
                <Carte />
                <h1>Ferma didactica experimentala</h1>
                <h2>deschisa intre 16 mai si 1 octombrie 2016</h2>
                <Oferte />
                <Project />
            </section>
        );
    }
}