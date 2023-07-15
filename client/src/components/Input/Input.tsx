import { StyledInput, StyledInputContainer } from './style';

interface IInput {
  id: string;
  labelText?: string;
  type: 'text' | 'email' | 'number';
  value?: string | number;
  onChange?: (e: any) => void;
}

export const Input = ({ type, id, labelText, value, onChange }: IInput) => {
  return (
    <StyledInputContainer>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <StyledInput id={id} type={type} value={value} onChange={onChange} />
    </StyledInputContainer>
  );
};
