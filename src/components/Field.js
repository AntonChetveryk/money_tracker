import React from "react";

const Field = (props) => {
  const {
    id,
    labelText,
    type,
    placeholder,
    name,
    value,
    onChange,
    className,
  } = props;
  return (
    <div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
      <label htmlFor={id} className="ml-2">
        {labelText}
      </label>
    </div>
  );
};

export default Field;
