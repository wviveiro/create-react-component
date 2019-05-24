import React from 'react';
import Component from './lib';
import './playgrond.scss';
import './styles/index.scss';

function Playground() {
  return (
    <div className="playground-area">
      <h1>Component Playgrond</h1>
      <hr />
      <p>Here you can play with you component before publishing it.</p>
      <Component />
    </div>
  );
}

export default Playground;
