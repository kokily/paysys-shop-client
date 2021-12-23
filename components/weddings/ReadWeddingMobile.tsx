import React from 'react';
import ReadWeddingTemplate from './common/ReadWeddingTemplate';
import ReadWeddingMobileBottom from './mobile/ReadWeddingMobileBottom';
import ReadWeddingMobileTop from './mobile/ReadWeddingMobileTop';
import SignModal from './sign/SignModal';
import SignRemoveModal from './sign/SignRemoveModal';

interface Props {
  wedding: WeddingType | null;
  convention: ConventionType | null;
  company: CompanyType | null;
  event: EventType | null;
  hanbok: HanbokType | null;
  meal: MealType | null;
  present: PresentType | null;
  reserve: ReserveType | null;
  prepayment: PrepaymentType | null;
  onRemoveSign: () => void;
  onList: () => void;
  onEdit: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
  visibleHusband: boolean;
  titleHusband: string;
  onCancelHusband: () => { payload: boolean; type: string };
  onConfirmHusband: () => void;
  setVisibleHusband: () => { payload: boolean; type: string };
  visibleBride: boolean;
  titleBride: string;
  onCancelBride: () => { payload: boolean; type: string };
  onConfirmBride: () => void;
  setVisibleBride: () => { payload: boolean; type: string };
}

const ReadWeddingMobile: React.FC<Props> = ({
  wedding,
  convention,
  company,
  event,
  hanbok,
  meal,
  present,
  reserve,
  prepayment,
  onRemoveSign,
  onList,
  onEdit,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
  visibleHusband,
  titleHusband,
  onCancelHusband,
  onConfirmHusband,
  setVisibleHusband,
  visibleBride,
  titleBride,
  onCancelBride,
  onConfirmBride,
  setVisibleBride,
}) => (
  <ReadWeddingTemplate
    onList={onList}
    onEdit={onEdit}
    modal={modal}
    onRemoveClick={onRemoveClick}
    onCancel={onCancel}
    onConfirm={onConfirm}
  >
    <>
      {wedding && (
        <>
          <h3 className="name">
            신랑님: <strong onClick={setVisibleHusband}>{wedding.husband_name}</strong>{' '}
            <strong style={{ color: 'pink' }}>♡</strong> 신부님:{' '}
            <strong onClick={setVisibleBride}>{wedding.bride_name}</strong>
          </h3>

          {(wedding.husband_image || wedding.bride_image) && (
            <SignRemoveModal
              husband={wedding.husband_image || undefined}
              bride={wedding.bride_image || undefined}
              onRemoveSign={onRemoveSign}
            />
          )}

          <h4>
            웨딩일시: {new Date(wedding.wedding_at).toLocaleDateString()}
            {wedding.event_at}
          </h4>

          <SignModal
            visible={visibleHusband}
            title={titleHusband}
            onCancel={onCancelHusband}
            onConfirm={onConfirmHusband}
          />

          <SignModal
            visible={visibleBride}
            title={titleBride}
            onCancel={onCancelBride}
            onConfirm={onConfirmBride}
          />

          <hr style={{ width: '90%' }} />

          <h3>웨딩비용</h3>

          <ReadWeddingMobileTop
            wedding={wedding}
            convention={convention}
            company={company}
            event={event}
            hanbok={hanbok}
          />

          <ReadWeddingMobileBottom
            wedding={wedding}
            meal={meal}
            present={present}
            reserve={reserve}
            prepayment={prepayment}
            hanbok={hanbok}
          />
        </>
      )}
    </>
  </ReadWeddingTemplate>
);

export default ReadWeddingMobile;
