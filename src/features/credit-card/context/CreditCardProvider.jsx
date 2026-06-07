import { useState } from "react";
import {
  CreditCardContext,
  initialErrors,
  initialFormData,
  validateField,
} from "./creditCardContext";

const CreditCardProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const value = {
    formData,
    setFormData,
    errors,
    setErrors,
    isSubmitted,
    setIsSubmitted,
    hasSubmittedAttempt,
    setHasSubmittedAttempt,
    validateField,
    initialErrors,
    initialFormData,
  };

  return (
    <CreditCardContext.Provider value={value}>
      {children}
    </CreditCardContext.Provider>
  );
};

export { CreditCardProvider };
