import * as actions from "../api";

const api = ({ dispatch, getState }) => (next) => async (action) => {
  console.log(action.payload);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  try {
    const response = await fetch(url, { method });
    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) {
      console.log(response.data);
      dispatch({ type: onSuccess, payload: response.data });
    }
  } catch (err) {
    console.log(err);
  }
};

export default api;
