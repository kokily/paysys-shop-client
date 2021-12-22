import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../styles';
import Button from '../common/Button';

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoBox = styled.div`
  background: #845ef7;
  color: white;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.2rem;
  font-size: 1.212rem;
  font-weight: 800;
  letter-spacing: 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #e5dbff;
  }
`;

const ContentBox = styled.div`
  background: white;
  padding: 1.215rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.25rem;
    padding-bottom: 0.2rem;
    width: 160px;
    text-align: center;
  }
  th {
    background: #748ffc;
    color: white;
    &.orange {
      background: #ffa94d;
      padding-top: 0;
      padding-bottom: 0;
    }
    &.cyan {
      background: #3bc9db;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;

const ButtonsBox = styled.div`
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

interface Props {
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: MouseEvent) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
}

const ChangePassword: React.FC<Props> = ({
  password,
  onChange,
  onChangePassword,
  onKeyPress,
}) => {
  return (
    <Container>
      <LogoBox>
        <h2 className="title">비밀번호 변경</h2>
      </LogoBox>

      <ContentBox>
        <Table>
          <tbody>
            <tr>
              <th>비밀번호</th>
              <td>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </ContentBox>

      <ButtonsBox>
        <Button submit onClick={onChangePassword}>
          확인
        </Button>
      </ButtonsBox>
    </Container>
  );
};

export default ChangePassword;
