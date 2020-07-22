import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div({
  color: "#a94442",
  backgroundColor: "#f2dede",
  borderColor: "#ebccd1",
  padding: 15,
  margin: 20,
  border: "1px solid transparent",
  borderRadius: 4,
});
interface ErrorProps {
  message: string;
}
export const Error: React.FC<ErrorProps> = ({ message }) => {
  return <StyledDiv>{message}</StyledDiv>;
};
