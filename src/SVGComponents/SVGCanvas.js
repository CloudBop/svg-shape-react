import React from 'react';
import { BgRect, Circle, Rect, Grp } from './SvgComponents';

function loadsaShapes(x, y) {
  //
  const startX = 50;
  const startY = 50;
  const arr = [];
  //
  for (let i = 0; i < x; i += 1) {
    for (let j = 0; j < y; j += 1) {
      //
      const square = {
        width: `25px`,
        height: `25px`,
        x: startX + 40 * i,
        y: startY + 40 * j,
        color: 'pink'
      };
      arr.push(<Rect {...square} />);
    }
  }

  return <g>{arr}</g>;
}

function SVGCanvas() {
  const diamond = {
    width: `25px`,
    height: `25px`,
    x: 100,
    y: 100,
    fill: 'blueviolet',
    transform: `rotate(45,${100 + 12.5},${100 + 12.5})`
  };
  const square = {
    width: `25px`,
    height: `25px`,
    x: 150,
    y: 100,
    fill: 'orange'
    // transform: `rotate(45,${100 + 17.5},${100 + 17.5})`
  };
  const circle = {
    cx: 200 + 12.5,
    cy: 100 + 12.5,
    r: 12.5,
    fill: 'tomato'
  };
  return (
    <svg className="SvgCanvas" xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 1050 400">
      <BgRect color={'#46f80f'} />

      <Rect {...diamond} />
      <Rect {...square} />
      <Circle {...circle} />

      {loadsaShapes(10, 10)}
    </svg>
  );
}

export default SVGCanvas;
