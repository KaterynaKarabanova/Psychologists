import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { StyledWrapper, styles } from "./Filters.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";

const options = [
  { value: "AZ", label: "A to Z" },
  { value: "ZA", label: "Z to A" },
  { value: "Less10", label: "Less than 10$" },
  { value: "More10", label: "Greater than 10$" },
  { value: "POPULAR", label: "Popular" },
  { value: "NOTPOPULAR", label: "Not popular" },
  { value: "ALL", label: "Show all" },
];

const Filters = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState<
    SingleValue<{ value: string; label: string }>
  >({ value: "ALL", label: "Show all" });
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const stylesSelect = {
    ...styles,
    dropdownIndicator: (provided: any) => ({
      ...provided,
      transition: "transform 0.2s ease",
      transform: menuIsOpen ? "rotate(180deg)" : null,
    }),
  };
  useEffect(() => {}, [selectedValue]);

  const handleChange = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    setSelectedValue(selectedOption);
    if (selectedOption) {
      dispatch(setFilter(selectedOption.value));
    }
  };

  return (
    <StyledWrapper>
      Filters
      <Select
        value={selectedValue}
        onChange={(value) => handleChange(value)}
        options={options}
        styles={stylesSelect}
        menuIsOpen={menuIsOpen}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        theme={(theme: any) => ({
          ...theme,
          colors: {
            neutral50: "var(--primary-white)",
          },
        })}
      />
    </StyledWrapper>
  );
};
export default Filters;