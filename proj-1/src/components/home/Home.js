import React from 'react';
import Left from './Left';
import Right from './Right'

export default class Home extends React.Component{
    render(){
        return(
            <div className='home-container'>
                <Left/>
                <Right/>
            </div>
        );
    }
}