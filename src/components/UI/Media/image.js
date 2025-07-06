import styled from 'styled-components';

const Image = styled.img`
  width: 40%;
  border-radius: ${({ rounded }) => (rounded ? '10px' : '0')};
  box-shadow: ${({ shadow }) => (shadow ? '0 4px 8px rgba(0,0,0,0.1)' : 'none')};
`;

export default Image;
