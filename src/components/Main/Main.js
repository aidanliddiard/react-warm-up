import React from 'react';
import cats from '../../cats';
import ImageItem from '../ImageItem/ImageItem';

import './Main.css';

export default function Main() {
  return (
    <div className="main">
      {cats.map((cat) => (
        <ImageItem
          key={cat.name}
          name={cat.name}
          type={cat.type}
          url={cat.url}
          year={cat.year}
          lives={cat.lives}
          isSideKick={cat.isSideKick}
        />
      ))}
    </div>
  );
}
