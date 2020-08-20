import service from '../services/service';

export const loadGiphies = (filter = '') => async (dispatch) => {
  try {
    let res = await service.query(filter);
    dispatch({ type: 'SET_GIPHIES', payload: res });
  } catch (err) {
    console.log(err);
  }
};
