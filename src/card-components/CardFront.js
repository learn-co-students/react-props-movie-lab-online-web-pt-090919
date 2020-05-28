import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      // uses poster prop as background image, rendering only necessary HTML
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
