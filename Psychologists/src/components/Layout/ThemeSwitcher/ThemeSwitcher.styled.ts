export const styles = {
  control: (base: any) => ({
    ...base,
    minWidth: 150,
    maxWidth: 150,
    minHeight: 40,
    borderRadius: "10px",
    background: "var(--primary-orange)",
    color: "var(--primary-white)",
    fontSize: "18px",
    fontWeight: "500",
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    color: state.isSelected ? "var(--primary-black)" : "var(--primary-gray)",
    fontSize: "18px",
    fontWeight: "500",
    ":hover": {
      background: "var(--hover-orange)",
      color: "var(--transparent-black)",
    },
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    background: "var(--primary-white)",
    borderRadius: "10px",
    minWidth: 150,
    maxWidth: 150,
  }),
};
