// Heading.jsx
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: ${({ level }) =>
    level === 1 ? '2rem' : level === 2 ? '1.5rem' : '1.2rem'};
`;

export default function Heading({ children, level = 1 }) {
  return <StyledHeading as={`h${level}`} level={level}>{children}</StyledHeading>;
}
