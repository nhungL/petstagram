import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";
import Axios from "axios";

export const register =
  (firstname, lastname, email, password, petname, age, species) =>
  async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
    try {
      const { data } = await Axios.post("/api/users/register", {
        email,
        password,
        firstname,
        lastname,
        petname,
        age,
        species,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      //dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
