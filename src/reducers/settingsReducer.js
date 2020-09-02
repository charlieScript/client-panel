import { NOTIFY_USER } from "../actions/types";


const initialState = {
  message: null,
  messageType: null
}

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      }
    default:
      return state;  
  }
}