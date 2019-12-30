import React from "react";
import styled from "styled-components";

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

export const LoginForm: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <form>
          <FormInnerWrap>
            <div>
              <input type="text" name="email" />
            </div>
            <div>
              <input type="password" name="password" />
            </div>
            <div>
              <input type="checkbox" name="remember_me" />
              Запомнить меня
            </div>
            <div>
              <button>Отправить</button>
            </div>
          </FormInnerWrap>
        </form>
      </Content>
    </Wrapper>
  );
};
