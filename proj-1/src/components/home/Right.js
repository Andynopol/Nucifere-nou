import React from 'react';
import PageTitle from '../PageTitle';
import Articole from './Articole';

export default class Right extends React.Component{
    render(){
        return(
            <section className="right">
                <Articole/>
            </section>
        );
    }
}