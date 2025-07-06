import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

export const AddMovie = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Left = styled.div`
  flex: 1 1 300px;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #1f2937; /* abu tua */
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6; /* biru soft */
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

export const Right = styled.div`
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;
