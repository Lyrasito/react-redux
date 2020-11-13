import * as actions from "../api";

const api = ({ dispatch, getState }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  console.log(action.type);
  console.log(action.payload);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    dispatch(actions.apiCallSuccess(jsonResponse));
    if (onSuccess) {
      //console.log(response.data);
      dispatch({ type: onSuccess, payload: jsonResponse });
    }
  } catch (err) {
    console.log(err);
  }
};

export default api;
