const max =
  (maxLength, message = `max length is ${maxLength}`) =>
  (value) => {
    const hasPassed = value.length <= maxLength;
    return {
      hasPassed,
      errorMessage: hasPassed ? "" : message,
    };
  };

export default max;
