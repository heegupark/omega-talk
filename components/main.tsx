import React, { Component } from 'react';
import Menu from '../components/menu';
import MainMenu from '../components/main-menu';
import Footer from '../components/footer';
import IndexPage from '../components/index-page';

const levelData = {
  1: ['number', 3, 3],
  2: ['number', 3, 5],
  3: ['number', 3, 10],
  4: ['number', 4, 5],
  5: ['number', 4, 10],
  6: ['number', 4, 15],
  7: ['number', 4, 20],
  8: ['number', 5, 10],
  9: ['number', 5, 15],
  10: ['number', 5, 20],
  11: ['number', 5, 30],
  12: ['number', 5, 40],
  13: ['number', 6, 15],
  14: ['number', 6, 20],
  15: ['number', 6, 30],
  16: ['number', 6, 40],
  17: ['number', 6, 50],
  18: ['number', 6, 60],
  19: ['number', 7, 15],
  20: ['number', 7, 20],
  21: ['number', 7, 30],
  22: ['number', 7, 40],
  23: ['number', 7, 50],
  24: ['number', 7, 60],
  25: ['number', 7, 70],
  26: ['number', 8, 15],
  27: ['number', 8, 30],
  28: ['number', 8, 50],
  29: ['number', 8, 70],
  30: ['number', 8, 90],
  31: ['number', 8, 110],
  32: ['number', 8, 130],
  33: ['number', 8, 150],
  34: ['number', 9, 20],
  35: ['number', 9, 40],
  36: ['number', 9, 60],
  37: ['number', 9, 80],
  38: ['number', 9, 100],
  39: ['number', 9, 120],
  40: ['number', 9, 140],
  41: ['number', 9, 160],
  42: ['number', 9, 180],
  43: ['number', 10, 20],
  44: ['number', 10, 40],
  45: ['number', 10, 60],
  46: ['number', 10, 80],
  47: ['number', 10, 100],
  48: ['number', 10, 120],
  49: ['number', 10, 140],
  50: ['number', 10, 160],
  51: ['number', 10, 180],
  52: ['number', 10, 200],
};

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
