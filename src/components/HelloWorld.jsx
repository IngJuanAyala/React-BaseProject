import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.base};
  color: white;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin: 5rem;
  translation: all 0.1s;

  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

const ButtonDanger = styled(Button)`
  background: ${props => props.theme.danger};
`;

const ButtonGradient = styled(Button)`
  background: ${props => props.theme.gradient};
`;

const HelloWorld = () => (
  <>
    <h1>Holita Mundo!</h1>
    <Button>Basic Button</Button>
    <ButtonDanger>Danger Button</ButtonDanger>
    <ButtonGradient>Gradient Button</ButtonGradient>
  </>
);
export default HelloWorld;
