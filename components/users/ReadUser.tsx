import React from 'react';
import styled from 'styled-components';
import { media, shadow } from '../../styles';
import ReadUserButtons from './common/ReadUserButtons';
import ReadUserContent from './common/ReadUserContent';

// Styles
const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 1rem;
  ${media.medium} {
    padding: 0.2rem;
  }
`;

const WhiteBoard = styled.div`
  ${shadow(1)};
  text-align: center;
  width: 80%;
  background: #dbe4ff;
  ${media.medium} {
    width: 100%;
  }
  header {
    h2 {
      font-size: 1.712rem;
    }
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, #12b886, #5c7cfa);
  ${media.medium} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

interface Props {
  user: UserType | null;
  onList: () => void;
  onSetAdmin: () => void;
  onSetEmployee: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadUser: React.FC<Props> = ({
  user,
  onList,
  onSetAdmin,
  onSetEmployee,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
}) => {
  return (
    <Container>
      <WhiteBoard>
        <div className="header">
          <h2>사용자 상세보기</h2>
        </div>

        <DownBorder />

        <ReadUserButtons
          onList={onList}
          onAdmin={onSetAdmin}
          onEmployee={onSetEmployee}
          modal={modal}
          onRemoveClick={onRemoveClick}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />

        {user && <ReadUserContent user={user} />}
      </WhiteBoard>
    </Container>
  );
};

export default ReadUser;
