export const ACTION_COMMON_SET_IS_MOBILE_MENU_VISIBLE = 'ACTION_COMMON_SET_IS_MOBILE_MENU_VISIBLE';

export const actionCommonSetIsMobileMenuVisible = (isVisible) => ({
  type: ACTION_COMMON_SET_IS_MOBILE_MENU_VISIBLE,
  payload: {
    isVisible: isVisible === undefined ? false : isVisible,
  },
});
