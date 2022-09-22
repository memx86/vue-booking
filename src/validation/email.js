const email =
  (message = "invalid email") =>
  (value) => {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const hasPassed = value.match(regex);

    return {
      hasPassed,
      errorMessage: hasPassed ? "" : message,
    };
  };
export default email;
