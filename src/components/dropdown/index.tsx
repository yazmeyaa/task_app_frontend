import {
  MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Container, DropdownContent, DropdownItem } from "./styled";
import { CarbonIconType } from "@carbon/icons-react";

export interface DropdownItem {
  text: string;
  onClick: (event: ReactMouseEvent<HTMLButtonElement>) => any;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  icon?: CarbonIconType;
}

function Dropdown({ label, items, icon: Icon }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!open) return;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    },
    [open]
  );

  function handleItemClick(event: ReactMouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    event.preventDefault();
    setOpen(false);
  }

  function handleContainerClick(event: ReactMouseEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    setOpen((p) => !p);
  }
  return (
    <Container onClick={handleContainerClick} ref={dropdownRef}>
      <Button>{Icon ? <Icon width="100%" height="100%" /> : label}</Button>
      <DropdownContent
        open={open}
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
        }}
      >
        {items &&
          items.map((item, index) => {
            return (
              <DropdownItem
                key={index}
                onClick={(event) => {
                  handleItemClick(event);
                  item.onClick(event);
                }}
              >
                {item.text}
              </DropdownItem>
            );
          })}
      </DropdownContent>
    </Container>
  );
}

export { Dropdown };
