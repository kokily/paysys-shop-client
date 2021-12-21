import Modal from './Modal';

interface Props {
  visible: boolean;
  title?: string;
  content?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const RemoveModal: React.FC<Props> = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      title="삭 제"
      content="정말 삭제하실래용?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default RemoveModal;
