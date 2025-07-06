import React from "react";
import styled from "styled-components";

const AlertWrapper = styled.div`
  color: #e53e3e;
  font-size: 0.9rem;
  margin-top: -0.8rem;
  margin-bottom: 1rem;
`;

function Alert({ children }) {
  return <AlertWrapper>{children}</AlertWrapper>;
}

export default Alert;
