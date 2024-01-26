import { TeachersListProps } from "../../types/types";
import TeachersCard from "../TeachersCard/TeachersCard";
import { StyledList } from "./TeachersList.styled";

const TeachersList = (props: TeachersListProps) => {
  const { array } = props;

  return (
    <div>
      <StyledList>
        {array.map((el, index: number) => (
          <TeachersCard el={el} key={index} />
        ))}
      </StyledList>
    </div>
  );
};
export default TeachersList;
