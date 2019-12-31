import { USER_LOGIN, USER_LOGOUT } from "../store/types";

export const login = (payload: any) => ({ type: USER_LOGIN, payload });
export const logout = () => ({ type: USER_LOGOUT });
