import React from 'react';
import { connect } from 'react-redux';
import { loadGiphies } from '../../store/actions';

import Logo from '../shared/Logo';
import GiphySearch from '../giphy/GiphySearch';
import GiphyList from '../giphy/GiphyList';

const Home = ({ loadGiphies, giphies }) => {
  return (
    <div className='home'>
      <Logo />
      <GiphySearch />
      {giphies === null ? '' : <GiphyList giphies={giphies} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  giphies: state.mainApp.giphies,
});

const mapDispatchToProps = {
  loadGiphies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
