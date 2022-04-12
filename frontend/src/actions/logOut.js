import { USER_SIGNOUT } from "../constants/userConstants";

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SIGNOUT });
};
