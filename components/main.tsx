import React, { Component } from 'react';
import Footer from './footer';
import IndexPage from './index-page';

export default class Main extends Component {
  render() {
    return (
      <>
        <IndexPage />

        <Footer />
      </>
    );
  }
}
