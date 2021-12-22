import React, { KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import AuthButton from './AuthButton';
import AuthInput from './AuthInput';
import AuthRight from './AuthRight';

// Styles
const Container = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const Label = styled.label`
  position: absolute;
  color: #212529;
  top: 12px;
  left: 0;
  transition: 0.2s ease all;
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    background: #0c8599;
    height: 3px;
    left: 50%;
    right: 50%;
    bottom: 0;
    transition: left 0.2s ease-out, right 0.2s ease-out;
  }
`;

interface Props {
  mode: 'login' | 'register';
  username: string;
  password: string;
  passwordConfirm?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const AuthForm: React.FC<Props> = ({
  mode,
  username,
  password,
  passwordConfirm,
  onChange,
  onSubmit,
}) => {
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return (
    <Container>
      <InputGroup>
        <AuthInput type="text" name="username" value={username} onChange={onChange} />
        <Bar className="bar" />
        <Label>사용자 이름</Label>
      </InputGroup>

      <InputGroup>
        <AuthInput
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <Bar className="bar" />
        <Label>비밀번호</Label>
      </InputGroup>

      {mode === 'register' && passwordConfirm !== undefined && (
        <InputGroup>
          <AuthInput
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
          <Bar className="bar" />
          <Label>비밀번호 확인</Label>
        </InputGroup>
      )}

      <AuthButton text={mode === 'login' ? '로그인' : '사원등록'} onClick={onSubmit} />
      <AuthRight mode={mode} />
    </Container>
  );
};

export default AuthForm;
