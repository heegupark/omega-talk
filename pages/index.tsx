import React, { Component } from 'react';
import IndexPage from '../components/index-page';
import Main from '../components/main';
import MainMobile from '../components/main-mobile';
import Footer from '../components/footer';
import { isMobile } from 'react-device-detect';

export default class extends Component {
  render() {
    return (
      <>
        <IndexPage />
        {isMobile ? (
          <MainMobile isMobile={isMobile} />
        ) : (
          <Main isMobile={isMobile} />
        )}
        <Footer />
      </>
    );
  }
}
