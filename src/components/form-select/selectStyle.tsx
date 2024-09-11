// import { IconClose, IconDownSharpArrow } from "@/components/icons";
import { components } from "react-select";
export const selectStyle = {
  control: (base: any, state: any) => ({
    ...base,
    color: "#101828",
    fontFamily: "Inter",
    background: "transparent",
    minHeight: "44px",
    opacity: state.isDisabled ? "0.5" : "1",
    padding: "0px 14px",
    fontSize: "16px",
    borderRadius: "8px",
    borderColor: state.isFocused ? "#475467" : "#D0D5DD",
    borderWidth: state.isFocused ? "2px" : "1px",
    boxShadow: state.isFocused ? null : null,
    minWidth: "80px",
    "&:hover": {
      borderColor: state.isFocused ? "#475467" : "#D0D5DD",
    },
  }),
  valueContainer: (base: any, state: any) => ({
    ...base,
    padding: "0px",
    cursor: state.isDisabled ? "not-allowed" : "auto",
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 9999,
    // background: "#F06548",
    fontFamily: "Inter",
    fontSize: "16px",
    color: "black",
    borderRadius: "8px",
    marginTop: 0,
  }),
  menuList: (base: any) => ({
    ...base,
    zIndex: 9999,
    background: "transparent",
    padding: 0,
    borderRadius: "8px",
  }),
  option: (base: any, state: any) => ({
    ...base,
    zIndex: 9999,
    color: "#101828",
    backgroundColor: state.isFocused ? "#EAECF0" : "transparent",
    opacity: state.isDisabled ? "0.5" : "1",
    cursor: state.isDisabled ? "not-allowed" : "pointer",
    "&:hover": {
      backgroundColor: state.isFocused && "#EAECF0",
    },
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: "#ffffff33",
    padding: "6px 8px",
    height: "32px",
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    backgroundColor: "#ffffff33",
    color: "white",
    fontSize: "16px",
    fontWeight: 400,
    minWidth: "90px",
    padding: "0px",
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    fontWeight: 400,
    backgroundColor: "#ffffff33",
    color: "#CED4DA",
    "&:hover": { color: "#ffffff33" },
  }),
  singleValue: (base: any) => ({
    ...base,
    fontWeight: 400,
    color: "#101828",
    minWidth: "80px",

    // specify a fallback color here for those values not accounted for in the styleMap
  }),
  input: (base: any) => ({
    ...base,
    fontWeight: 400,
    // color: "#101828",
    // color: "#bbc2cd",
    fontSize: "16px",
  }),
};
export const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      {/* <IconDownSharpArrow className="relative right-0" /> */}
    </components.DropdownIndicator>
  );
};

export const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      {/* <IconClose className="h-3 w-3" /> */}
    </components.MultiValueRemove>
  );
};
