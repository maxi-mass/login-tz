import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { issetToken } from "../../helpers";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actionCreators";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!issetToken()) {
      history.push("/login");
    }
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };
  return (
    <>
      <h1>Hello world</h1>
      <button onClick={logoutHandler}>Выйти</button>
    </>
  );
};
