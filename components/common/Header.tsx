import type { MouseEvent } from 'react';
import React, { useCallback, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media, shadow } from '../../styles';
import useLogout from '../../libs/hooks/auth/useLogout';
import useToggle from '../../libs/hooks/common/useToggle';
import Apeach from './nav/Apeach';
import NavList from './nav/NavList';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 20;
  ${shadow(1)}
`;

const Layout = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const Content = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  ${media.large} {
    width: 992px;
  }
  ${media.medium} {
    width: 100%;
  }
`;

const Logo = styled.a`
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: #02c363;
  font-family: 'Rajdhani';
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-shadow: 0.5px 0.5px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

interface Props {
  user: MeType | null;
}

const Header: React.FC<Props> = ({ user }) => {
  const { onLogout } = useLogout();
  const [menu, toggleMenu] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const onOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;

      if (ref.current.contains(e.target as any)) return;

      toggleMenu();
    },
    [toggleMenu]
  );

  return (
    <Container>
      <Layout>
        <Content>
          <Link href="/soldier">
            <Logo>행사전표시스템</Logo>
          </Link>

          <Spacer />

          {user && (
            <>
              <div ref={ref}>
                <Apeach onClick={toggleMenu} />
              </div>

              <NavList
                user_id={user.user_id}
                admin={user.admin}
                onClose={onOutsideClick}
                onLogout={onLogout}
                visible={menu}
              />
            </>
          )}
        </Content>
      </Layout>
    </Container>
  );
};

export default Header;
