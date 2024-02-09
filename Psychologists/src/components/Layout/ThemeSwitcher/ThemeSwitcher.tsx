import { useState } from "react";
import { useTheme } from "../../../styles/ThemeContext";
import Select, { SingleValue } from "react-select";
import { styles } from "./ThemeSwitcher.styled";

const ThemeSwitcher = () => {
  const { setColor } = useTheme();

  const [selectedValue, setSelectedValue] = useState<
    SingleValue<{ value: string; label: string }>
  >({ value: "rgba(252, 131, 44, 1)", label: "Orange" });
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleChange = (
    value: SingleValue<{ value: string; label: string }>
  ) => {
    setSelectedValue(value);
    if (value) {
      setColor(value?.value);
    }
  };

  const options = [
    { value: "rgba(252, 131, 44, 1)", label: "Orange" },
    { value: "rgba(52, 112, 255, 1)", label: "Blue" },
    { value: "rgba(84, 190, 150, 1)", label: "Green" },
  ];

  const stylesSelect = {
    ...styles,
    dropdownIndicator: (provided: any) => ({
      ...provided,
      transition: "transform 0.2s ease",
      transform: menuIsOpen ? "rotate(180deg)" : null,
    }),
  };
  return (
    <div>
      {/* <select onChange={handleChange}>
        <option value="rgba(252, 131, 44, 1)">Orange</option>
        <option value="rgba(52, 112, 255, 1)">Blue</option>
        <option value="rgba(84, 190, 150, 1)">Green</option>
      </select> */}
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
    </div>
  );
};
export default ThemeSwitcher;
