import { useEffect, useRef } from 'react';
import { StyledAlertModal } from '../AlertModal/style';
import Button from '../Button';
import { StyledMessage } from './style';

interface IAlertModalProps {
  text: string;
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal: React.FC<IAlertModalProps> = ({ text, isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      if (!dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    isOpen && (
      <StyledAlertModal ref={dialogRef}>
        <StyledMessage>{text}</StyledMessage>
        <Button
          color='#fff'
          onClick={handleClose}
          text='Uždaryti'
          bgColor='#083e8a'
        />
      </StyledAlertModal>
    )
  );
};

export default AlertModal;
