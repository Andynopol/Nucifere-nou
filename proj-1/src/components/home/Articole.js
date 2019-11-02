import React from 'react';
import PageTitle from '../PageTitle';

import image from '../../img/Articole-home-img.jpg';

export default class Articole extends React.Component{
    render(){
        return(
            <div style={{minHeight:170}} id='article' className='wrapper'>
                <PageTitle id='home-article-title' name='Articole' />
                <p id='proj-description' className='article'>
                    {/* <img src={image} id='proj-img' className='livada-img' /> */}
                    Cel putin pentru moment… adio fonduri europene pentru livezi de nuc cu soiuri straine…
                    <br/>
                    Despre venituri pasive din horticultura
                    <br/>
                    
                </p>
                <p style={{color: '#3b5d0c', cursor: 'pointer'}} id='proj-description' className='article more'>
                    vezi mai multe
                </p>
            </div>
        );
    }
}