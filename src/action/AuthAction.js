import * as AuthApi from "../api/AuthRequest.js";

export const login = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.login(formData);
    dispatch({ type: "AUTH_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL", payload: error });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL", payload: error });
  }
};
