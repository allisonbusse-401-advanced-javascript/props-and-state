import React, { Component } from 'react';

class RandomColor extends Component {
  state = { backgroundColor: 'black', backgroundImg: '' };

  background = (colors) => {
    const current = colors[Math.floor(Math.random() * colors.length)];
    if(this.state.backgroundColor === current) this.setState({ backgroundImg: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' });
    else this.setState({ backgroundColor: current, backgroundImg: '' });
  };

  componentDidMount() {
    const colors = ['red', 'blue', 'purple', 'yellow', 'green', 'orange', 'pink'];
    window.setInterval(() => this.background(colors), 1000);
  }



  render() {

    const divStyle = {
      backgroundColor: this.state.backgroundColor,
      backgroundImage: this.state.backgroundImg,
      width: '1500px',
      height: '1000px'
    };

    return (
      <div style={divStyle}></div>
    );
  }
}

export default RandomColor;
