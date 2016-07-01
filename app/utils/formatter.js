const stringUtils = {
  underScoreToTitle: (string) => {
    return string.replace(/\_/g, ' ');
  },
  capitalize: (string) => {
    return string.replace(string[0], string[0].toUpperCase())
  }
}

export { stringUtils }