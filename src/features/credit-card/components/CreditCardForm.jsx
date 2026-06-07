import { CheckFatIcon } from "@phosphor-icons/react";
import { useCreditCard } from "../context/creditCardContext";

const CreditCardForm = () => {
  const {
    isSubmitted,
    setIsSubmitted,
    hasSubmittedAttempt,
    setHasSubmittedAttempt,
    formData,
    setFormData,
    errors,
    setErrors,
    validateField,
    initialErrors,
    initialFormData,
  } = useCreditCard();

  const nameErrorId = "cardName-error";
  const numberErrorId = "cardNumber-error";
  const expMonthErrorId = "cardExpMonth-error";
  const expYearErrorId = "cardExpYear-error";
  const cvcErrorId = "cardCvc-error";

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmittedAttempt(true);

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validateField(field, formData[field]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericFields = [
      "cardCvc",
      "cardExpMonth",
      "cardExpYear",
      "cardNumber",
    ];

    const newValue = numericFields.includes(name)
      ? value.replace(/\D/g, "")
      : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    const error = validateField(name, newValue);
    if (hasSubmittedAttempt) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  const handleReset = () => {
    setFormData({ ...initialFormData });
    setErrors({ ...initialErrors });
    setHasSubmittedAttempt(false);
    setIsSubmitted(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      noValidate
      className="sm:w-[75%] 2xl:w-[55%] w-full flex flex-col gap-7 font-semibold lg:p-10 p-5 "
    >
      {!isSubmitted ? (
        <>
          <div className="flex  flex-col">
            <label
              htmlFor="cardName"
              className="uppercase -translate-y-1 text-gray-600"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              className={`outline-2 outline-gray-200 placeholder:text-gray-300 font-mono rounded-md p-2 
              focus:scale-101 transition-all duration-300 ${
                errors.cardName ? "outline-red-500" : ""
              }`}
              placeholder="e.g. Jane Appleseed"
              value={formData.cardName}
              onChange={handleChange}
              required
              aria-invalid={hasSubmittedAttempt && !!errors.cardName}
              aria-describedby={
                hasSubmittedAttempt && errors.cardName ? nameErrorId : undefined
              }
            />
            {hasSubmittedAttempt && errors.cardName && (
              <span
                id={nameErrorId}
                className="text-red-500 text-sm mt-1"
                role="alert"
              >
                {errors.cardName}
              </span>
            )}
          </div>
          <div className="flex  flex-col">
            <label
              htmlFor="cardNumber"
              className="uppercase -translate-y-1 text-gray-600"
            >
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={16}
              className={`outline-2 outline-gray-200 placeholder:text-gray-300 rounded-md p-2 focus:scale-101 transition-all font-mono ${
                errors.cardNumber ? " outline-red-500" : ""
              }`}
              placeholder="e.g. 1234 5678 9123 0000"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              aria-invalid={hasSubmittedAttempt && !!errors.cardNumber}
              aria-describedby={
                hasSubmittedAttempt && errors.cardNumber
                  ? numberErrorId
                  : undefined
              }
            />
            {hasSubmittedAttempt && errors.cardNumber && (
              <span
                id={numberErrorId}
                className="text-red-500 text-sm mt-1"
                role="alert"
              >
                {errors.cardNumber}
              </span>
            )}
          </div>

          <div className="flex gap-5">
            <fieldset className="flex flex-col gap-2 w-1/2">
              <legend className="-translate-y-1 text-gray-600">
                EXP.DATE (MM/YY)
              </legend>
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  name="cardExpMonth"
                  id="cardExpMonth"
                  maxLength={2}
                  placeholder="MM"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`outline-2 outline-gray-200 placeholder:text-gray-300 text-center rounded-md p-2 w-1/2 self-end focus:scale-103 transition-all font-mono ${
                    errors.cardExpMonth ? " outline-red-500" : ""
                  }`}
                  value={formData.cardExpMonth}
                  onChange={handleChange}
                  required
                  aria-invalid={hasSubmittedAttempt && !!errors.cardExpMonth}
                  aria-describedby={
                    hasSubmittedAttempt && errors.cardExpMonth
                      ? expMonthErrorId
                      : undefined
                  }
                />

                <input
                  type="text"
                  name="cardExpYear"
                  id="cardExpYear"
                  maxLength={2}
                  placeholder="YY"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`outline-2 outline-gray-200 placeholder:text-gray-300 text-center rounded-md p-2 self-end w-1/2 focus:scale-103 transition-all font-mono ${
                    errors.cardExpYear ? " outline-red-500" : ""
                  }`}
                  value={formData.cardExpYear}
                  onChange={handleChange}
                  required
                  aria-invalid={hasSubmittedAttempt && !!errors.cardExpYear}
                  aria-describedby={
                    hasSubmittedAttempt && errors.cardExpYear
                      ? expYearErrorId
                      : undefined
                  }
                />
              </div>
              <div className="flex flex-row gap-2">
                {hasSubmittedAttempt && errors.cardExpMonth && (
                  <span
                    id={expMonthErrorId}
                    className="text-red-500 text-xs"
                    role="alert"
                  >
                    {errors.cardExpMonth}
                  </span>
                )}
                {hasSubmittedAttempt && errors.cardExpYear && (
                  <span
                    id={expYearErrorId}
                    className="text-red-500 text-xs"
                    role="alert"
                  >
                    {errors.cardExpYear}
                  </span>
                )}
              </div>
            </fieldset>
            <div className="flex flex-col w-1/2">
              <label htmlFor="cardCvc" className="-translate-y-1 text-gray-600">
                CVC
              </label>
              <input
                type="text"
                name="cardCvc"
                id="cardCvc"
                maxLength={3}
                pattern="[0-9]*"
                className={`outline-2 outline-gray-200 placeholder:text-gray-300 font-mono rounded-md p-2 focus:scale-102 transition-all ${
                  errors.cardCvc ? " outline-red-500" : ""
                }`}
                placeholder="e.g. 123"
                value={formData.cardCvc}
                onChange={handleChange}
                required
                aria-invalid={hasSubmittedAttempt && !!errors.cardCvc}
                aria-describedby={
                  hasSubmittedAttempt && errors.cardCvc ? cvcErrorId : undefined
                }
              />
              {hasSubmittedAttempt && errors.cardCvc && (
                <span
                  id={cvcErrorId}
                  className="text-red-500 text-sm mt-1"
                  role="alert"
                >
                  {errors.cardCvc}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-gray-800 w-full py-3 text-white rounded-md 
            hover:-translate-y-0.5 hover:-translate-x-0.5 hover:drop-shadow-lg
            active:translate-x-0.5 active:translate-y-0.5 active:drop-shadow-none
            transition-all"
          >
            Confirm
          </button>
        </>
      ) : (
        <div
          className="flex flex-col gap-10"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="flex items-center justify-center">
            <div
              className="rounded-full w-20 h-20 flex items-center justify-center
            bg-[radial-gradient(at_top_left,#bf5af2_0%,transparent_60%),radial-gradient(at_top_right,#ff453a_0%,transparent_50%),radial-gradient(at_bottom_left,#5e5ce6_0%,transparent_70%),radial-gradient(at_bottom_right,#ff9f0a_0%,transparent_60%),linear-gradient(to_bottom_right,#a855f7,#ec4899)]"
            >
              <CheckFatIcon size={32} color="white" />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="uppercase text-3xl text-gray-600">Thank You!</h1>
            <p className="text-lg">We've added your card details</p>
          </div>
          <div>
            <button
              type="reset"
              className="bg-gray-800 w-full py-3 text-white rounded-md 
            hover:-translate-y-0.5 hover:-translate-x-0.5 hover:drop-shadow-lg
            active:translate-x-0.5 active:translate-y-0.5 active:drop-shadow-none
            transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default CreditCardForm;
