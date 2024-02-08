import { useTheme } from "../../../styles/ThemeContext";

const ThemeSwitcher = () => {
  const { setColor } = useTheme();
  const handleChange = (e: any) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option value="rgba(252, 131, 44, 1)">Orange</option>
        <option value="rgba(52, 112, 255, 1)">Blue</option>
        <option value="rgba(84, 190, 150, 1)">Green</option>
      </select>
    </div>
  );
};
export default ThemeSwitcher;
