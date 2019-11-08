import React from 'react';
import PageTitle from '../PageTitle';

export default class MaterialSaditor extends React.Component{
    render(){
        return(
            <div className='page-wrapper'>
                <PageTitle name='Material Saditor'/>
                <p id='first-pg' className='article'>
                    In curs de actualizare…
                </p>
            </div>
        );
    }
}