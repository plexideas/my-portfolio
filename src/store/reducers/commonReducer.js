import { ACTION_COMMON_SET_IS_MOBILE_MENU_VISIBLE } from '../actions/commonAction';

const initialState = {
  isMobileMenuVisible: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_COMMON_SET_IS_MOBILE_MENU_VISIBLE: {
      const isMobileMenuVisible = !state.isMobileMenuVisible;
      return { ...state, isMobileMenuVisible };
    }
    default:
      return state;
  }
};

export default commonReducer;
