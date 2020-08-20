import React from 'react';

const GyphyItem = ({ giphy }) => {
  return (
    <div className='giphyItem'>
      <img src={giphy.images.original.url} alt='' />
    </div>
  );
};

export default GyphyItem;
