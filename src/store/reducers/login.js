import * as actions from '../actions/login';

const initialState = {
  token: '',
  loginUser:'运营登录'
};

const defaultAction = {
  type: 'doNothing'
};

const login = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    case actions.LOGIN:
      return Object.assign({}, state, { token:action.data});
    default:
      return state;
  }
};

export default login;