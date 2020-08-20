import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadGiphies } from '../../store/actions';

const GyphySearch = ({ loadGiphies }) => {
  const [text, setText] = useState('');

  const onSearch = () => loadGiphies(text);

  return (
    <div className='giphySearch'>
      <input
        type='text'
        placeholder='Search Giphy'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span onClick={onSearch}>
        <i className='fas fa-search'></i>
      </span>
    </div>
  );
};

const mapDispatchToProps = {
  loadGiphies,
};

export default connect(null, mapDispatchToProps)(GyphySearch);
