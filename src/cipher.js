const FIRST_LETTER_CODE = 65;
const ALPHABET_LENGTH = 26;

const encodeChar = (offset, char) => {
  const charCode = char.charCodeAt(0);
  const zeroBasedCode = charCode - FIRST_LETTER_CODE;
  const newCode = zeroBasedCode + offset;

  return String.fromCharCode((newCode % ALPHABET_LENGTH) + FIRST_LETTER_CODE);
};

const cipher = {
  encode: (offset, msg) => {
    console.log("Esto de abajo es un console log:");
    console.log(typeof offset);
    if (typeof offset !== 'number' || typeof msg !== 'string') {
      throw new TypeError("Wrong argument types");
    }

    const encodedMsg = [];

    for (const char of msg) {
      encodedMsg.push(encodeChar(offset, char));
    }

    return encodedMsg.join("");
  },
};

export default cipher;
