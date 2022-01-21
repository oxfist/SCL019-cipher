const FIRST_LETTER_CODE = 65;
const ALPHABET_LENGTH = 26;

const encodeChar = (offset, char) => {
  const charCode = char.charCodeAt(0);
  const zeroBasedCode = charCode - FIRST_LETTER_CODE;
  const newCode = zeroBasedCode + offset;

  return String.fromCharCode((newCode % ALPHABET_LENGTH) + FIRST_LETTER_CODE);
};

const decodeChar = (offset, char) => {
  const charCode = char.charCodeAt(0);
  console.log(charCode);
  const zeroBasedCode = charCode - FIRST_LETTER_CODE;
  console.log(zeroBasedCode);
  const newCode = zeroBasedCode - (offset % 26) ;
  console.log(newCode);

  return String.fromCharCode((newCode % ALPHABET_LENGTH) + FIRST_LETTER_CODE);
};

const cipher = {
  encode: (offset, msg) => {
    if (typeof offset !== 'number' || typeof msg !== 'string') {
      throw new TypeError("Wrong argument types");
    }

    const encodedMsg = [];

    for (const char of msg) {
      encodedMsg.push(encodeChar(offset, char));
    }

    return encodedMsg.join("");
  },
  decode: (offset, msg) => {
    if (typeof offset !== 'number' || typeof msg !== 'string') {
      throw new TypeError("Wrong argument types");
    }
    const decodedMsg = [];
    for (const char of msg ){
      decodedMsg.push(decodeChar(offset, char));
    }
    return decodedMsg.join("");
  }
};

export default cipher;
