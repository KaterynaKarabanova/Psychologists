import { ModalProps } from "../../types/types";
import sprite from "../../images/sprite.svg";
import { StyledBackdrop, StyledModal } from "./Modal.styled";
const Modal = (props: ModalProps) => {
  const { children, toggleModal } = props;
  return (
    <StyledBackdrop>
      <StyledModal>
        <button onClick={toggleModal}>
          <svg width={30} height={30}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        {children}
      </StyledModal>
    </StyledBackdrop>
  );
};
export default Modal;
