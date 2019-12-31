import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";

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
        <Field type="checkbox" name="rememberMe" />
        Запомнить меня
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
  onSubmit: formData => console.log("Hello", formData)
})(LoginForm);

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const handler = (formData: any) => {
    console.log(formData);
  };

  return (
    <Wrapper>
      <Content>
        <LoginReduxForm />
      </Content>
    </Wrapper>
  );
};
