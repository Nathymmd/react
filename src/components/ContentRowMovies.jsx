import React from 'react';
import { Cards } from './index'
import { cards } from '../constants';

export default function ContentRowMovies() {
  return (
          <div className="row">
                { cards.map( (card, i) => <Cards key={card + i} {...card} />)}
          </div>
  );
}
