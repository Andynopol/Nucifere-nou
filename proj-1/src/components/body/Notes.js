import React from 'react';

export default class Notes extends React.Component{
    render(){
        return(
            <div id="note-wrapper" className="wrapper">
                <p className="notes" id="italic-notes">
                    Pentru elevi și studenți , sunt acceptate numai grupurile de minim 10 persoane.
                </p>
                <p className="notes">
                    Deschis de luni pănă vineri, între orele 09.00-17.00 <br/>
                    Grupurile de elevi și studenți sunt primite numai pe bază de programare.
                </p>
            </div>
        );
    }
}