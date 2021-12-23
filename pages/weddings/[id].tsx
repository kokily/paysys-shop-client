import type { NextPage } from 'next';
import { BrowserView, MobileView } from 'react-device-detect';
import PageTemlate from '../../components/common/PageTemplate';
import ReadWedding from '../../components/weddings/ReadWedding';
import ReadWeddingMobile from '../../components/weddings/ReadWeddingMobile';
import useLoggedIn from '../../libs/hooks/auth/useLoggedIn';
import useBrideSign from '../../libs/hooks/weddings/useBrideSign';
import useHusbandSign from '../../libs/hooks/weddings/useHusbandSign';
import useReadWedding from '../../libs/hooks/weddings/useReadWedding';

const ReadWeddingPage: NextPage = () => {
  const { user } = useLoggedIn(true);
  const {
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
  } = useReadWedding();
  const {
    visibleHusband,
    titleHusband,
    onCancelHusband,
    onConfirmHusband,
    setVisibleHusband,
  } = useHusbandSign();
  const { visibleBride, titleBride, onCancelBride, onConfirmBride, setVisibleBride } =
    useBrideSign();

  return (
    <PageTemlate user={user}>
      <BrowserView>
        <ReadWedding
          wedding={wedding}
          convention={convention}
          company={company}
          event={event}
          hanbok={hanbok}
          meal={meal}
          present={present}
          reserve={reserve}
          prepayment={prepayment}
          onRemoveSign={onRemoveSign}
          onList={onList}
          onEdit={onEdit}
          modal={modal}
          onRemoveClick={onRemoveClick}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </BrowserView>
      <MobileView>
        <ReadWeddingMobile
          wedding={wedding}
          convention={convention}
          company={company}
          event={event}
          hanbok={hanbok}
          meal={meal}
          present={present}
          reserve={reserve}
          prepayment={prepayment}
          onRemoveSign={onRemoveSign}
          onList={onList}
          onEdit={onEdit}
          modal={modal}
          onRemoveClick={onRemoveClick}
          onCancel={onCancel}
          onConfirm={onConfirm}
          visibleHusband={visibleHusband}
          titleHusband={titleHusband}
          onCancelHusband={onCancelHusband}
          onConfirmHusband={onConfirmHusband}
          setVisibleHusband={setVisibleHusband}
          visibleBride={visibleBride}
          titleBride={titleBride}
          onCancelBride={onCancelBride}
          onConfirmBride={onConfirmBride}
          setVisibleBride={setVisibleBride}
        />
      </MobileView>
    </PageTemlate>
  );
};

export default ReadWeddingPage;
