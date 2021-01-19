import { ALERT_MESSAGE_CLEAR, ALERT_MESSAGE_SHOW } from './alertTypes';

const initialValue = {
  show: false,
  message: '',
  style: '',
};

const alertReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALERT_MESSAGE_SHOW:
      return {
        ...state,
        show: true,
        message: action.payload,
        style: action.style,
      };
    case ALERT_MESSAGE_CLEAR:
      return {
        ...state,
        show: false,
        message: '',
      };
    default:
      return state;
  }
};

export default alertReducer;
