export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#!^&+=_\-~?]).{8,}$/;

export const HAS_SPACE_REGEX = /\s/;

export const validateField = (name, value, allValues = {}) => {
  const trimmedValue = typeof value === "string" ? value.trim() : "";

  switch (name) {
    case "name":
      if (!trimmedValue) {
        return "Name is required/دخل الاسم يا عم انت ";
      }
      return "";

    case "email":
      if (!trimmedValue) {
        return "Email address is required/ايميل الاستاذ";
      }
      if (!EMAIL_REGEX.test(trimmedValue)) {
        return "Please enter a valid email address (e.g. user@example.com)دخل الايميل صح";
      }
      return "";

    case "username":
      if (!trimmedValue) {
        return "Username is required";
      }
      if (HAS_SPACE_REGEX.test(value)) {
        return "Username must not contain any spaces";
      }
      return "";

    case "password":
      if (!value) {
        return "Password is required";
      }
      if (value.length < 8) {
        return "Password must be at least 8 characters long";
      }
      if (!PASSWORD_REGEX.test(value)) {
        return "Password must include at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character (e.g. *@%$#)هتعرف ولا هتغلبنا معاك ";
      }
      return "";

    case "confirmPassword":
      if (!value) {
        return "Confirm password is required/دخل الباسورد التاني يا محترم";
      }
      if (value !== allValues.password) {
        return "Passwords do not match/الباسوردين مش شبه بعض يا غالي";
      }
      return "";

    default:
      return "";
  }
};

export const validateForm = (formData) => {
  const errors = {};
  const fields = ["name", "email", "username", "password", "confirmPassword"];

  fields.forEach((field) => {
    const error = validateField(field, formData[field], formData);
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};
