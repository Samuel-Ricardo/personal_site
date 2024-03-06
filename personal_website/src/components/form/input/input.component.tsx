import { IInputProps } from '@/@types/props/form/input';

export const Input = async ({
  label,
  id,
  type,
  hook,
  required,
}: IInputProps) => {
  return (
    <div>
      <label></label>
      <input required={required} />
      <label></label>
    </div>
  );
};
