import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const load8 = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
100% {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
`;

export const Loader = styled.div({
  margin: "60px auto",
  fontSize: "10px",
  position: "relative",
  textIndent: "-9999em",
  borderTop: "1.1em solid rgba(255, 255, 255, 0.2)",
  borderRight: "1.1em solid rgba(255, 255, 255, 0.2)",
  borderBottom: "1.1em solid rgba(255, 255, 255, 0.2)",
  borderLeft: "1.1em solid #007aff",
  WebkitTransform: "translateZ(0)",
  MsTransform: "translateZ(0)",
  transform: "translateZ(0)",
  animation: `${load8} 1.1s infinite linear`,
  borderRadius: "50%",
  width: "10em",
  height: "10em",

  "&:after": {
    borderRadius: "50%",
    width: "10em",
    height: "10em",
  },
});
