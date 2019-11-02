import React from 'react';
import PageTitle from '../PageTitle';

export default class MaterialeSiUtilaje extends React.Component{
    render(){
        return(
            <div className='page-wrapper'>
                <PageTitle name='Materiale si utilaje' />
                    <ul className="article" style={{listStyle:'square'}}>
                        <li>Materiale conexe</li>
                        <br/>

                        <li>Utilaje pentru exploatarea livezilor de nuc</li>
                        <br/>

                        <li>Instalatii de conditionat nuca</li>
                        <br/>

                        <li>Hale multifunctionale: Conditionare pentru depozitare, Depozitare nuca in coaja, Hale prelucrare, Depozitare produse finite</li>
                    </ul>
            </div>
        );
    }
}