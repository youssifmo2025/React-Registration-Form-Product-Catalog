import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { validateField, validateForm } from '../utils/validators';
import '../styles/Register.css';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);

    if (isSubmitted || touched[name]) {
      const fieldError = validateField(name, value, updatedFormData);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: fieldError,
      }));

      if (name === 'password' && (isSubmitted || touched.confirmPassword)) {
        const confirmError = validateField('confirmPassword', updatedFormData.confirmPassword, updatedFormData);
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: confirmError,
        }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    const fieldError = validateField(name, value, formData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    setTouched({
      name: true,
      email: true,
      username: true,
      password: true,
      confirmPassword: true,
    });

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    alert(`Registration Successful!\n\nForm Data:\n${JSON.stringify(formData, null, 2)}`);

    navigate('/');
  };

  return (
    <div className="register-page-container">
      <div className="form-card-col">
        <div className="form-card">
          <div className="form-card-header">
            <h2 className="form-card-title">Create an Account</h2>
            <p className="form-card-subtitle">
              Fill in the form below with valid credentials
            </p>
          </div>

          <form onSubmit={handleSubmit} className="register-form" noValidate>
            <FormInput
              id="name"
              name="name"
              label="Name"
              type="text"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              touched={isSubmitted || touched.name}
              required
            />

            <FormInput
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="e.g. user@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={isSubmitted || touched.email}
              required
            />

            <FormInput
              id="username"
              name="username"
              label="User Name"
              type="text"
              placeholder="e.g. johndoe"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username}
              touched={isSubmitted || touched.username}
              required
            />

            <FormInput
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="e.g. P@ssword1234"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={isSubmitted || touched.password}
              required
            />

            <FormInput
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword}
              touched={isSubmitted || touched.confirmPassword}
              required
            />

            <button type="submit" className="btn-register" id="register-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
