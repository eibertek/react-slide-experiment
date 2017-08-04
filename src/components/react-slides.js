import React from 'react';
import {render} from 'react-dom';
import Slider from 'react-slick';
import ReactCSSTransitionGroup from 'react-transition-group';

const styles = {position: 'absolute', top:'200px', backgroundColor:'#e0e0e0', zIndex:99999};
class SimpleSlider extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.state = {
      actualFrame:1,
      actualLink:''
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
      customPaging: function(i) {
        return <a>*</a>
      },
      afterChange: (i) =>{
        this.setState({actualLink:<div key={i} style={styles}>LINK {i}</div>, actualFrame:i+1});
      }      
    };
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <button className='button' onClick={this.previous}>Previous</button>
          <button className='button' onClick={this.next}>Next</button>
        </div>        
      <Slider  ref={c => this.slider = c } {...settings}>
        <div><img src="dist/img/img1.jpg"  width="100%" height="100%" /></div>
        <div><img src="dist/img/img2.jpg"  width="100%" height="100%" /></div>
        <div><img src="dist/img/img3.jpg"  width="100%" height="100%" /></div>
        <div><img src="dist/img/img4.jpg"  width="100%" height="100%" /></div>
        <div><img src="dist/img/img5.jpg"  width="100%" height="100%" /></div>
      </Slider>
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
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