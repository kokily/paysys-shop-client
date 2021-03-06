import React from 'react';
import styled, { css } from 'styled-components';
import { shadow } from '../../styles';

// Styles
const Container = styled.button<Props>`
  font-size: 1rem;
  font-weight: bold;
  width: 90px;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  &:active {
    transform: translateY(3px);
  }
  & + & {
    margin-left: 1rem;
  }
  ${(props) =>
    props.cancel &&
    css`
      border: 1px solid #fa5252;
      background: white;
      color: #fa5252;
      &:hover {
        background: #fa5252;
        color: white;
        ${shadow(1)};
      }
    `}
  ${(props) =>
    props.submit &&
    css`
      border: 1px solid #7950f2;
      background: white;
      color: #7950f2;
      &:hover {
        background: #7950f2;
        color: white;
        ${shadow(1)};
      }
    `}
    ${(props) =>
    props.edit &&
    css`
      border: 1px solid #fab005;
      background: white;
      color: #fab005;
      &:hover {
        background: #fab005;
        color: white;
        ${shadow(1)};
      }
    `}
    ${(props) =>
    props.fullSize &&
    css`
      width: 100%;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

interface Props {
  cancel?: boolean;
  submit?: boolean;
  edit?: boolean;
  fullSize?: boolean;
  onClick?: (e: any) => void;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  const htmlProps = rest as any;

  return (
    <Container
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}
    >
      {children}
    </Container>
  );
};

export default Button;
