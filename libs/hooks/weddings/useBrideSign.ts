import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setCurrentImg, setBrideImg, visibleBride } from '../../modules/sign';
import { addSignAPI } from '../../api/sign';

export default function useBrideSign() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const dispatch = useDispatch();
  const { currentImg, bride } = useSelector((state) => state.sign);

  const dataURItoBlob = (uri: string) => {
    // Base64 Decode
    const blob = window.atob(uri.split(',')[1]);
    let array: number[] = [];

    for (let i = 0; i < blob.length; i++) {
      array.push(blob.charCodeAt(i));
    }

    const file = new Blob([new Uint8Array(array)], {
      type: 'image/png',
    });

    return file;
  };

  const onUploadSign = async () => {
    if (id) {
      const file = dataURItoBlob(currentImg);
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(
        process.env.NODE_ENV === 'production'
          ? 'https://paysys.kr/api/upload'
          : 'http://localhost:4000/api/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response) {
        toast.error('Upload Error!');
        return;
      }

      const data = await response.json();
      const sign = `https://image.paysys.kr/${data.key}`;

      await dispatch(setBrideImg(sign));
      await dispatch(setCurrentImg(''));
      await dispatch(
        addSignAPI({
          weddingId: id,
          sex: 'bride',
          image: sign,
        })
      );
      await dispatch(visibleBride(false));
    } else {
      return;
    }
  };

  return {
    visibleBride: bride,
    titleBride: '신부 서명',
    onCancelBride: () => dispatch(visibleBride(false)),
    onConfirmBride: onUploadSign,
    setVisibleBride: () => dispatch(visibleBride(true)),
  };
}
