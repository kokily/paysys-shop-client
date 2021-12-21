import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import Header from './Header';
import BottomNav from './nav/BottomNav';

// Styles
const Main = styled.main`
  margin: 6rem 5rem 0rem 5rem;
  ${media.medium} {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

interface Props {
  children: React.ReactNode;
  user: MeType | null;
}

const PageTemlate: React.FC<Props> = ({ children, user }) => {
  return (
    <>
      <Header user={user} />
      <Main>{children}</Main>
      <BottomNav />
    </>
  );
};

export default PageTemlate;
