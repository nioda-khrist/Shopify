import { ALERT_MESSAGE_CLEAR, ALERT_MESSAGE_SHOW } from './alertTypes';

export const alertMessageShow = (message, style) => {
  return {
    type: ALERT_MESSAGE_SHOW,
    payload: message,
    style,
  };
};

export const alertMessageClear = () => {
  return {
    type: ALERT_MESSAGE_CLEAR,
  };
};

export const alertMessage = (message, style) => {
  return (dispatch) => {
    dispatch(alertMessageShow(message, style));
  };
};

export const clearAlert = () => {
  return (dispatch) => {
    dispatch(alertMessageClear());
  };
};
