import { ModalProps } from "../../types/types";
import sprite from "../../images/sprite.svg";
import { StyledBackdrop, StyledBtn, StyledModal } from "./Modal.styled";
import { useEffect } from "react";

const Modal = (props: ModalProps) => {
  const { children, toggleModal } = props;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.id === "backdrop") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleModal]);

  return (
    <StyledBackdrop id="backdrop">
      <StyledModal>
        <StyledBtn onClick={toggleModal}>
          <svg width={30} height={30}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </StyledBtn>
        {children}
      </StyledModal>
    </StyledBackdrop>
  );
};

export default Modal;
