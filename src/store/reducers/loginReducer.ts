const initialState = {
  isLogin: false,
  loginToken: null
};

export const loginReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "REDUCER_TEST":
      console.log(action);
    default:
      return state;
  }
};
