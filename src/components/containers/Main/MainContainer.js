import React, { Component } from 'react';
import Header from '../../Header';

export default class MainContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main id='main'>
          {children}
        </main>
      </React.Fragment>
    )
  }
}
