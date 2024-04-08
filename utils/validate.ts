const validateEmailInput = (input: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(input);
};

const validatePasswordInput = (passwordValue: string) => {
  const minPasswordLength = 8;

  const isInvalidLength = passwordValue.length < minPasswordLength;
  const isOnlyStringValue = /^[a-zA-Z]+$/.test(passwordValue);
  const isOnlyNumberValue = /^\d+$/.test(passwordValue);

  return !(isInvalidLength || isOnlyStringValue || isOnlyNumberValue);
};

export { validateEmailInput, validatePasswordInput };
