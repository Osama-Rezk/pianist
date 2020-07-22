import React, { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button({
  padding: 10,
  height: 40,
});
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
export const Button: React.FC<ButtonProps> = ({ title, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {title}
    </StyledButton>
  );
};
