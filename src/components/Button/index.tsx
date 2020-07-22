import React, { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button({
  padding: 10,
  height: 40,
});
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
};
