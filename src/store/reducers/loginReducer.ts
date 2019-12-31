import { SET_USER_DATA } from "../types";

const initialState = {
  loginData: {}
};

export const loginReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        loginData: action.payload
      };
    default:
      return state;
  }
};
