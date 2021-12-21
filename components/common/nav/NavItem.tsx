import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Styles
const Container = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const ItemBox = styled.div`
  padding: 0.75rem 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #474747;
  cursor: pointer;
  &:hover {
    color: white;
    background: #5baaaa;
  }
`;

interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const NavItem: React.FC<Props> = ({ children, href, onClick }) => {
  const jsx = <ItemBox onClick={onClick}>{children}</ItemBox>;

  return href ? (
    <Link href={href}>
      <Container style={{ display: 'block' }}>{jsx}</Container>
    </Link>
  ) : (
    jsx
  );
};

export default NavItem;
