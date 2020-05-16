import React, { Component } from 'react';

export default class CardFront extends Component {

  render(prop) {
    return (
      <div className="card-front" style={{backgroundImage: `url(${prop})`}}>
      </div>
    )
  }
}
