import Select, { GroupBase, Props } from "react-select";
import {
  DropdownIndicator,
  MultiValueRemove,
  selectStyle,
} from "./selectStyle";

export const FormSelect = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  customProp,
  ...props
}: Props<Option, IsMulti, Group> & { customProp?: any }) => {
  return (
    <Select
      openMenuOnFocus
      menuPortalTarget={document.getElementById("select-box-portal")}
      menuPlacement="bottom"
      menuPosition="fixed"
      className="custom-select" // Add a custom class name
      classNamePrefix="custom-select"
      components={{
        DropdownIndicator,
        MultiValueRemove,
      }}
      styles={selectStyle}
      {...(props as any)}
      theme={(theme) => ({ ...theme, borderRadius: 0 })}
      customProp={customProp}
    />
  );
};
