import { useAppSelector } from "hooks/redux";
import { useActions } from "hooks/useActions";
import {themes} from "themes";
import { Dropdown, DropdownItem } from "components/dropdown";
import { ColorPalette } from "@carbon/icons-react";

function ThemeChanger() {
  const currentTheme = useAppSelector((state) => state.theme);
  const { changeTheme } = useActions();

  const themeOptions: DropdownItem[] = Object.values(themes).map((item) => {
    return {
      text: item.name,
      onClick() {
        changeTheme(item);
      },
    };
  });

  return (
    <Dropdown
      icon={ColorPalette}
      items={themeOptions}
      label={currentTheme.name}
    />
  );
}

export { ThemeChanger };
