import React from 'react';
import PageTitle from '../PageTitle';

export default class Exportatori extends React.Component{
    render(){
        return(
            <div className='page-wrapper'>
                <PageTitle name="Exportatori" />
                <p id='first-pg' className="article">
                    In curand...
                </p>
            </div>
        );
    }
}