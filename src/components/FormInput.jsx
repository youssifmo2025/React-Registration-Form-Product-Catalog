import React from 'react';

function FormInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  touched,
  required = false,
  autoComplete,
}) {
  const showError = Boolean(touched && error);

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label} {required && <span className="required-star">*</span>}
      </label>

      <div className="input-wrapper">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`form-input ${showError ? 'input-error' : ''}`}
          autoComplete={autoComplete}
        />
      </div>

      {showError && (
        <span className="error-message" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormInput;
