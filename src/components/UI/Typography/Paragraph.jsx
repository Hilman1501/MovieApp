// Paragraph.jsx
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

export default function Paragraph({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}
