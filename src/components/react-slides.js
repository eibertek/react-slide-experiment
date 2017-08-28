import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick';
import ReactCSSTransitionGroup from 'react-transition-group';
import styles from './styles.scss'; 
import './slick.min.css'; 
import './slick-theme.min.css'; 

//const styles = {position: 'absolute', top:'200px', backgroundColor:'#e0e0e0', zIndex:99999};
class SimpleSlider extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.state = {
      actualFrame:1,
      actualLink:<a key="1" href="http://localhost:3000" className="animated fadeIn">LINK 1</a>
    }
  }

  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.innerSlider.play();
    this.slider.slickPrev()
  }  
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (i) =>{
        this.setState({actualLink:<a key={i} href="http://localhost:3000" className="animated fadeIn">LINK {i}</a>, actualFrame:i+1});
      }      
    };
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <button className='button' onClick={this.previous}>Previous</button>
          <button className='button' onClick={this.next}>Next</button>
        </div>        
      <Slider  ref={c => this.slider = c } {...settings}>
        <div>
          {this.state.actualLink}
          <img src="dist/img/img1.jpg"  width="100%" height="100%" /></div>
        <div>
          {this.state.actualLink}          
          <img src="dist/img/img2.jpg"  width="100%" height="100%" /></div>
        <div>
          {this.state.actualLink}          
          <img src="dist/img/img3.jpg"  width="100%" height="100%" /></div>
        <div>
          {this.state.actualLink}          
          <img src="dist/img/img4.jpg"  width="100%" height="100%" /></div>
        <div>
          {this.state.actualLink}          
          <img src="dist/img/img5.jpg"  width="100%" height="100%" /></div>
      </Slider>
      </div>
    );
  }
}

class App extends React.Component {
  render () {
    return <div> <SimpleSlider /></div>;
  }
}

render(<App/>, document.getElementById('app'));