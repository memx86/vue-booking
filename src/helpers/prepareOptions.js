const prepareOptions = (options) =>
  options.map((option) => ({ value: option, label: option }));

export default prepareOptions;
