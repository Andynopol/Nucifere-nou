import React from 'react';

import PageTitle from '../PageTitle';

export default class PrezentariExclusive extends React.Component{
    render(){
        return(
            <div className="page-wrapper">
                <PageTitle name="Prezentari Exclusive" />
                <p id='first-pg' className="article">
                    In curand...
                </p>
            </div>
        );
    }
}