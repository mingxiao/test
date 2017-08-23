import ReactDOM from 'react-dom';
import React from 'react';
const $ = require("jquery");


describe('Header', () => {
  let Header;

  beforeEach(() => {
    Header = require('../../src/components/header');
    $('body').find('#root').remove().end().append('<div id="root"/>');
    ReactDOM.render(<Header />, root);
  });

  it('renders', () => {
    expect(false).toBeTruthy();
  });
});