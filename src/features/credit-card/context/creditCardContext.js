import { createContext, useContext } from "react";

export const CreditCardContext = createContext(null);

export const initialFormData = {
  cardName: "",
  cardNumber: "",
  cardExpMonth: "",
  cardExpYear: "",
  cardCvc: "",
};

export const initialErrors = {
  cardName: "",
  cardNumber: "",
  cardExpMonth: "",
  cardExpYear: "",
  cardCvc: "",
};

export const validateField = (name, value) => {
  let error = "";

  switch (name) {
    case "cardName":
      if (!value.trim()) {
        error = "Name is required";
      } else {
        const parts = value.trim().split(/\s+/);
        if (parts.length < 2) {
          error = "Please enter your full name";
        }
      }
      break;

    case "cardNumber":
      if (!value) {
        error = "Card number is required";
      } else if (value.length < 16) {
        error = "Card number must be 16 digits";
      }
      break;

    case "cardExpMonth":
      if (!value) {
        error = "Month is required";
      } else if (parseInt(value, 10) < 1 || parseInt(value, 10) > 12) {
        error = "Month must be between 01 and 12";
      }
      break;

    case "cardExpYear":
      if (!value) {
        error = "Year is required";
      }
      break;

    case "cardCvc":
      if (!value) {
        error = "CVC is required";
      } else if (value.length < 3) {
        error = "CVC must be 3 digits";
      }
      break;

    default:
      break;
  }

  return error;
};

export const useCreditCard = () => {
  const context = useContext(CreditCardContext);

  if (!context) {
    throw new Error("useCreditCard must be used within a CreditCardProvider");
  }

  return context;
};
