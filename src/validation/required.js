const required =
  (message = "is requiered") =>
  (value) => {
    const hasPassed = !!value;
    return {
      hasPassed,
      errorMessage: hasPassed ? "" : message,
    };
  };

export default required;
