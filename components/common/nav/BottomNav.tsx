import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../../styles';
import ActiveLink from './../ActiveLink';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  max-width: 768px;
  height: 60px;
  ${shadow(1)}
  display: flex;
  overflow-x: auto;
`;

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-grow: 1;
  min-width: 20%;
  overflow: hidden;
  white-space: nowrap;
  -webkit-tab-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
  &.active {
    color: #49b886;
  }
  &:hover {
    background: #c3fae8;
  }
`;

interface ContentProps {
  href: string;
  icon: string;
  name: string;
}

const ContentItem: React.FC<ContentProps> = ({ href, icon, name }) => {
  return (
    <ActiveLink href={href} activeClassName="active">
      <Anchor>
        <i className="material-icons">{icon}</i>
        {name}
      </Anchor>
    </ActiveLink>
  );
};

interface Props {}

const BottomNav: React.FC<Props> = () => {
  return (
    <Container>
      <Contents>
        <ContentItem href="/soldier" icon="military_tech" name="현 역" />
        <ContentItem href="/reserve" icon="camera_enhance" name="예비역" />
        <ContentItem href="/general" icon="face" name="일 반" />
        <ContentItem href="/cart" icon="shopping_cart" name="전표확인" />
        <ContentItem href="/fronts" icon="receipt_long" name="빌지목록" />
      </Contents>
    </Container>
  );
};

export default BottomNav;
