import immutable from 'immutable';
import Weather from '../../data/weather';

export const app = (state = new immutable.Map(), action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return state.set('weather', new Weather(action.weather));
    default:
      return state;
  }
};
