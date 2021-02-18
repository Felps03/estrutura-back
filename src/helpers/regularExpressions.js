const letterRegex = /^[A-Za-zÀ-ÿ &]*$/;
const numberRegex = /^[0-9]*$/;
const letterAndNumberRegex = /^[a-z0-9]*$/;

module.exports = {
  letterAndNumberRegex,
  letterRegex,
  numberRegex
};
