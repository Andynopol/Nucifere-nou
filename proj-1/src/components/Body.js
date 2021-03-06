import React from 'react';
import Header from './header/Header';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

//Home
import Home from './home/Home';
//Infiintare Livezi de Nuc
import AnalizaPremergatoare from './infiintare-livezi-de-nuc/AnalizaPremergatoare';
import ProiecteInfiintare from './infiintare-livezi-de-nuc/ProiectInfiintare'
import SerciciiSpecializate from './infiintare-livezi-de-nuc/ServiciiSpecializate';
import MaterialSaditor from './infiintare-livezi-de-nuc/MaterialSaditor';
import MaterialeSiUtilaje from './infiintare-livezi-de-nuc/MaterialeSiUtilaje';

//Afaceri cu nuci
import LiveziFamiliale from './afaceri-cu-nuci/LiveziFamiliale';
import LiveziComerciale from './afaceri-cu-nuci/LiveziComerciale';
import DepozitareNuci from './afaceri-cu-nuci/DepozitareNuci';
import Exportatori from './afaceri-cu-nuci/Exportatori';

//Soiuri de nuc
import Soiuri from './soiuri-de-nuc/Soiuri';

//Evenimente
import ConferinteZonale from './evenimente/ConferinteZonale';
import PrezentariExclusive from './evenimente/PrezentariExclusive';
import Workshop from './evenimente/Workshop';

//Social
import Social from './Social/Social';

//Proiecte
import ProiecteFinalizate from './Proiecte/ProiecteFinalizate';
import ProiecteOngoing from './Proiecte/ProiecteOngoing';

//CSS
import '../CSS/style.css';


export default class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page:'Home'
        }
        this.changePage = this.changePage.bind(this)
    }

    render(){
        console.log(this.state.page);
        //Home
        if(this.state.page ==='Home'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <Home/>
                    <Footer />
                </div>
            );
        }
        // Infiintarea Livezilor de Nuc
        else if(this.state.page ==='Analiza premergatoare'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <AnalizaPremergatoare/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Proiecte infiintare'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <ProiecteInfiintare/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Servicii specializate'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <SerciciiSpecializate/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Material Saditor'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <MaterialSaditor/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Materiale si utilaje'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <MaterialeSiUtilaje/>
                    <Footer />
                </div>
            );
        }
        // Afaceri cu nuci
        else if(this.state.page === 'Livezi familiale'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <LiveziFamiliale/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Livezi comerciale'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <LiveziComerciale/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Depozitarea nucilor'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <DepozitareNuci/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Exportatori'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <Exportatori/>
                    <Footer />
                </div>
            );
        }
        //Soiuri de nuc
        else if(this.state.page === 'Soiuri de nuc'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <Soiuri/>
                    <Footer />
                </div>
            );
        }
        //Evenimente
        else if(this.state.page === 'Prezentari exclusive'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <PrezentariExclusive/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Conferinte zonale'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <ConferinteZonale/>
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Workshop-uri'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <Workshop />
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Social'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <Social />
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Proiecte in derulare'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <ProiecteOngoing />
                    <Footer />
                </div>
            );
        }
        else if(this.state.page === 'Proiecte finalizate'){
            return(
                <div className="container">
                    <Header onClick={this.changePage} />
                    <Nav onClick={this.changePage}/>
                    <ProiecteFinalizate />
                    <Footer />
                </div>
            );
        }
        else{
            this.state.page = 'Home'
            return(
                <div className="container">
                    <Header />
                    <Nav onClick={this.changePage}/>
                    <Home/>
                    <Footer />
                </div>
            );
        }
    }
    //changing the page
    changePage(newPage){
        console.log(this.state.page);
        this.setState({page: newPage});
    }
}