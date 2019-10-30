import React from 'react';
import {Slide} from 'react-slideshow-image';

import {images} from '../image-slider';

export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state={index:0}
        this.setIndex = this.setIndex.bind(this);
    }
    render(){
        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            arrows: false,
            onChange: (oldIndex, newIndex) => {
              return;
            }
          }

          const Slideshow = () => {
            return (
              <div className="slide-container">
                <Slide {...properties}>
                  <div className="each-slide">
                    <div>
                        <img className="carousel-img" src={images[0]} />
                    </div>
                  </div>
                  <div className="each-slide">
                    <div>
                        <img className="carousel-img" src={images[1]} />
                    </div>
                  </div>
                  <div className="each-slide">
                    <div>
                        <img className="carousel-img" src={images[2]} />
                    </div>
                  </div>
                  <div className="each-slide">
                    <div>
                        <img className="carousel-img" src={images[3]} />
                    </div>
                  </div>
                  <div className="each-slide">
                    <div> 
                        <img className="carousel-img" src={images[4]} /> 
                    </div>
                  </div>
                  <div className="each-slide">
                    <div>
                        <img className="carousel-img" src={images[5]} />
                    </div>
                  </div>
                </Slide>
              </div>
            )
        }

        return(
            <Slideshow/>
        );
    }
    setIndex(i){
        this.setState({index:i})
    }
}