import { PassVisibilityProps } from "../../types/types";
import sprite from "../../images/sprite.svg";
import { StyledBtn } from "./PassVisibility.styled";

const PassVisibility = (props: PassVisibilityProps) => {
  const { visibility, toggleVisibility } = props;
  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleVisibility();
  };
  return (
    <StyledBtn onClick={onBtnClick}>
      <svg width={26} height={26}>
        <use
          href={visibility ? `${sprite}#icon-eye-hidden` : `${sprite}#icon-eye`}
        />
      </svg>
    </StyledBtn>
  );
};
export default PassVisibility;
