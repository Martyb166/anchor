import * as types from '../actions/types';

const initialState = {
  account: '',
  node: 'http://eos.jesta.us'
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case types.SET_SETTING: {
      return Object.assign({}, state, action.payload);
    }
    default: {
      return state;
    }
  }
}
