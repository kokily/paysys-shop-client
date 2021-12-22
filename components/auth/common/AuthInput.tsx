import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';

// Styles
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #15aabf;
  padding: 10px;
  display: block;
  width: 92%;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: #12b886;
  }
  &:focus ~ .bar:before {
    left: 0;
    right: 0;
  }
`;

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

const AuthInput: React.FC<Props> = ({ type, name, value, onChange, onKeyPress }) => (
  <Input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    required
  />
);

export default AuthInput;
