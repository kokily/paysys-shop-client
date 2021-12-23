import React from 'react';
import ReadWeddingLeft from './browser/ReadWeddingLeft';
import ReadWeddingRight from './browser/ReadWeddingRight';
import ReadWeddingTemplate from './common/ReadWeddingTemplate';
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
}

const ReadWedding: React.FC<Props> = ({
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
            신랑님: <strong>{wedding.husband_name}</strong>{' '}
            <strong style={{ color: 'pink' }}>♡</strong> 신부님:{' '}
            <strong>{wedding.bride_name}</strong>
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

          <hr style={{ width: '90%' }} />

          <h3>웨딩비용</h3>

          <ReadWeddingLeft
            wedding={wedding}
            convention={convention}
            company={company}
            event={event}
            hanbok={hanbok}
          />

          <ReadWeddingRight
            wedding={wedding}
            meal={meal}
            present={present}
            reserve={reserve}
            hanbok={hanbok}
            prepayment={prepayment}
          />
        </>
      )}
    </>
  </ReadWeddingTemplate>
);

export default ReadWedding;
