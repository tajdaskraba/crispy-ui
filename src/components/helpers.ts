export const containsNumbers = (value: string): boolean => {
  return !/^\D*$/.test(value);
};

export const validateInput = (value: string, containsNumbersFn: (input: string) => boolean) => {
  if (!value || value.trim() === '') {
    return { isValid: false, hasError: false, message: '' };
  }

  if (containsNumbersFn(value)) {
    return { isValid: false, hasError: true, message: 'No numbers allowed!' };
  }

  return { isValid: true, hasError: false, message: value };
};