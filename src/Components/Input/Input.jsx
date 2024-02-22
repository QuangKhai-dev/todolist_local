import { Input } from 'antd';
// eslint-disable-next-line react/prop-types
const InputCustom = ({
  id,
  name,
  placeHolder,
  label,
  onChange,
  onBlur,
  showError,
  value,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <Input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        id={id}
        placeholder={placeHolder}
      />
      {showError}
    </div>
  );
};

export default InputCustom;
