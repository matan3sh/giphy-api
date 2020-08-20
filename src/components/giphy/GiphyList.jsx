import React from 'react';
import GiphyItem from './GiphyItem';

const GyphyList = ({ giphies }) => {
  return (
    <div className='GiphyList'>
      {giphies?.map((giphy) => (
        <GiphyItem key={giphy.id} giphy={giphy} />
      ))}
    </div>
  );
};

export default GyphyList;
