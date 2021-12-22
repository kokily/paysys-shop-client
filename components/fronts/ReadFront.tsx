import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { media } from '../../styles';
import ReadHeader from './common/ReadHeader';
import ReadMobileHeader from './common/mobile/ReadMobileHeader';
import ReadTable from './common/ReadTable';
import ReadMobileTable from './common/mobile/ReadMobileTable';
import ReadTotal from './common/ReadTotal';
import ReadMobileTotal from './common/mobile/ReadMobileTotal';
import RemoveModal from '../common/RemoveModal';
import ReadButtons from './common/ReadButtons';

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhiteBoard = styled.div`
  width: 80%;
  ${media.xsmall} {
    width: 100%;
  }
`;

const Content = styled.div``;

const EtcPane = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    width: 100%;
    color: #364fc7;
    padding: 15px;
    background-color: #dbe4ff;
    border-color: #bac8ff;
    border: 1px solid transparent;
    border-radius: 4px;
  }
`;

interface Props {
  front: BillType | null;
  user: MeType | null;
  onList: () => void;
  onRestore: () => void;
  onReserve: () => void;
  onRemoveReserve: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadFront: React.FC<Props> = ({
  front,
  user,
  onList,
  onRestore,
  onReserve,
  onRemoveReserve,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
}) => {
  return (
    <Container>
      {front && (
        <WhiteBoard>
          <>
            <BrowserView>
              <ReadHeader front={front} />
            </BrowserView>
            <MobileView>
              <ReadMobileHeader front={front} />
            </MobileView>
          </>

          <Content>
            <>
              <BrowserView>
                <ReadTable front={front} />
              </BrowserView>
              <MobileView>
                <ReadMobileTable front={front} />
              </MobileView>
            </>

            {front.etc !== '' && front.etc !== ' ' && (
              <>
                <hr />
                <EtcPane>
                  <span>기타사항 : {front.etc}</span>
                </EtcPane>
              </>
            )}

            <hr />

            <>
              <BrowserView>
                <ReadTotal front={front} />
              </BrowserView>
              <MobileView>
                <ReadMobileTotal front={front} />
              </MobileView>
            </>

            {user && (
              <ReadButtons
                front={front}
                user_id={user.user_id}
                admin={user.admin}
                onRemoveClick={onRemoveClick}
                onRestore={onRestore}
                onList={onList}
                onReserve={onReserve}
                onRemoveReserve={onRemoveReserve}
              />
            )}
          </Content>
        </WhiteBoard>
      )}

      <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </Container>
  );
};

export default ReadFront;
