import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: #1e3a8a;
  color: #e0f2fe;
  box-shadow: 0 2px 6px rgba(30, 58, 138, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin: 0;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #cbd5e1;
  }
`;

export const NavbarItem = styled(Link)`
  text-decoration: none;
  color: inherit; /* inherit dari MenuItem atau Nav */
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #cbd5e1;
  }
`;
