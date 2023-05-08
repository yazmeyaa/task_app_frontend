import { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";
import { Container, Input, Label } from "./styled";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  name?: string;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

type Ref = HTMLInputElement;

export const PrimaryInput = forwardRef<Ref, SearchBarProps>(
  ({ label, placeholder, name, onInput, error, ...rest }, ref) => {
    return (
      <Container>
        <Label htmlFor={name}>{label}</Label>
        <Input
          onInput={onInput}
          name={name ?? label}
          placeholder={placeholder ? placeholder : undefined}
          ref={ref}
          {...rest}
        />
      </Container>
    );
  }
);
