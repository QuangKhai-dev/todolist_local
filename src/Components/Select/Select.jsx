import { Select } from 'antd';
// eslint-disable-next-line react/prop-types
const SelectCustom = ({
  id,
  label,
  options,
  styleLayout,
  onChange,
  onBlur,
  showError,
  value,
}) => {
  return (
    <div className={styleLayout}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <Select
        onChange={onChange}
        onBlur={onBlur}
        style={{ width: '100%' }}
        defaultValue={value}
        options={options}
      />
      {showError}
    </div>
  );
};

export default SelectCustom;
