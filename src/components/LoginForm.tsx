import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";
import { login, logout } from "../store/actionCreators";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

export const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 1024px;
  background: #ffffff;
`;

export const Content = styled.div`
  position: absolute;
  width: 380px;
  height: 541px;
  left: 530px;
  top: 241px;
  border: 1px solid black;
`;

export const EnterAccount = styled.div`
  height: 20px;
  width: 50px;
  margin-top: 40px;
  border: 1px solid black;
`;

export const Logo = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: calc(50% - 40px / 2);
  top: 72px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e10050;
  border-radius: 50%;
`;

export const EmailInput = styled.div`
  position: absolute;
  height: 83px;
  left: 0px;
  right: 0px;
  top: 173px;
  border: 1px solid black;
`;

export const PassInput = styled.div`
  position: absolute;
  height: 83px;
  left: 0px;
  right: 0px;
  top: 249px;
  border: 1px solid black;
`;

export const SubmitButtonWrapper = styled.div`
  position: absolute;
  height: 48px;
  left: 0px;
  right: 0px;
  top: 381px;
  display: flex;
  align-items: center;
  /* 2dp — Elevation */

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
`;

export const RememberMe = styled.div`
  position: absolute;
  width: 126px;
  height: 19px;
  left: 31px;
  top: 332px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height, or 119% */

  display: flex;
  align-items: flex-end;
  border: 1px solid black;
  /* Black 87% */

  color: rgba(0, 0, 0, 0.87);
`;

export const Legend = styled.div`
  position: absolute;
  height: 18px;
  left: 1px;
  right: 0px;
  top: 127px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 18px;
  /* identical to box height, or 75% */

  /* display: flex;
  align-items: center; */
  text-align: center;
  letter-spacing: 0.16px;

  /* Black 87% */

  color: rgba(0, 0, 0, 0.87);
  border: 1px solid black;
`;

export const Copyright = styled.div`
  position: absolute;
  width: 178px;
  height: 18px;
  left: calc(50% - 178px / 2);
  bottom: 0px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.16px;

  /* Black 54% */

  color: rgba(0, 0, 0, 0.54);
`;

const FormInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginForm: React.FC = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" type="text" name="email" placeholder="email" />
      </div>
      <div>
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" />
        Запомнить меня
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const submitHander = (formData: any) => {
    dispatch(login(formData));
    history.push("/");
  };

  return (
    <Wrapper>
      <Content>
        <Logo>
          <LockOutlinedIcon style={{ color: "#fff" }} />
        </Logo>
        <Legend>
          <span>Вход в аккаунт</span>
        </Legend>
        <EmailInput>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </EmailInput>
        <PassInput>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </PassInput>
        <RememberMe>
          <Checkbox color="primary" />
          Запомнить меня
        </RememberMe>
        <SubmitButtonWrapper>
          <Button style={{ width: "100%" }} variant="contained" color="primary">
            Primary
          </Button>
        </SubmitButtonWrapper>
        <Copyright>Copyright© Ваш сайт 2019.</Copyright>
        <LoginReduxForm onSubmit={submitHander} />
      </Content>
    </Wrapper>
  );
};
