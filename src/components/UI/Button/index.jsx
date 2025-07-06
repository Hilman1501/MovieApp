import styled, { css } from "styled-components";

const colors = {
  primary: "#4361ee",
  secondary: "#b5179e",
};

// Ukuran button berdasarkan prop `size`
const sizeStyles = {
  sm: css`
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  `,
  md: css`
    font-size: 1rem;
    padding: 0.5rem 1rem;
  `,
  lg: css`
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ variant }) => colors[variant] || colors.primary};

  ${({ size = "md" }) => sizeStyles[size]}

  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
