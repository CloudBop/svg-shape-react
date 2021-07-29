import React from 'react';

export const Grp = (...props) => <g {...props} />;

export const Circle = props => {
  return <circle {...props}> </circle>;
};

export const Rect = props => {
  return <rect {...props}> </rect>;
};

export const BgRect = () => {
  const defaultAttr = {
    width: '100%',
    height: '100%'
  };
  return <rect {...defaultAttr} fill="#f0f0ff" />;
};

export const SvgCanvas = () => {
  return <svg className="SvgCanvas" xmlns="http://www.w3.org/2000/svg" baseProfile="full" viewBox="0 0 1050 400" />;
};
