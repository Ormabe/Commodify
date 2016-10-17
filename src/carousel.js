import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-boostrap-carousel/css/react-boostrap-carousel.css';
import {React_Boostrap_Carousel} from 'react-boostrap-carousel';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return(
        <div style={{height:300,margin:20}}>
          <React_Boostrap_Carousel animation={true} className="carousel-fade">
            <div style={{height:300,width:"100%",backgroundColor:"skyblue"}}>
              123
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"aqua"}}>
              456
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"lightpink"}}>
              789
            </div>
          </React_Boostrap_Carousel>
        </div>
      )
    }
};

export default Carousel
