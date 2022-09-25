const number =
  (message = "Not a number") =>
  (value) => {
    const regex = /^[0-9]+$/;
    const hasPassed = regex.test(value);
    return {
      hasPassed,
      errorMessage: hasPassed ? "" : message,
    };
  };

export default number;
