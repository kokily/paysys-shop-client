import React, { useState } from 'react';
import styled from 'styled-components';
import RemoveModal from '../../common/RemoveModal';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const SignBox = styled.div`
  width: 160px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  husband?: string;
  bride?: string;
  onRemoveSign: () => void;
}

const SignRemoveModal: React.FC<Props> = ({ husband, bride, onRemoveSign }) => {
  const [remove, setRemove] = useState(false);

  const onRemoveClick = () => {
    setRemove(true);
  };

  const onCancel = () => {
    setRemove(false);
  };

  const onConfirm = () => {
    setRemove(false);
    onRemoveSign();
  };

  return (
    <>
      <Container onClick={onRemoveClick}>
        <SignBox>
          <label>신랑님 서명</label>
          {husband && <img src={husband} alt="" />}
        </SignBox>
        <SignBox>
          <label>신부님 서명</label>
          {bride && <img src={bride} alt="" />}
        </SignBox>
      </Container>
      <RemoveModal visible={remove} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
};

export default SignRemoveModal;
