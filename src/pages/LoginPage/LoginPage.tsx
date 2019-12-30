import React from "react";
import { Title, Wrapper } from "./styles";
import Button from "@material-ui/core/Button";

export const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Button variant="contained" color="primary">
        Some button
      </Button>
    </Wrapper>
  );
};
