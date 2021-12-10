import cipher from "./cipher.js";

const CIPHER_FORM_ID = "cipherForm";
const RESULT_DIV_ID = "encodeResult";
const TEXT_INPUT_ID = "msg";
const OFFSET_INPUT_ID = "offset";
const PARAGRAPH = "p";

function createEncodedParagraph(offset, msg) {
  const encodedParagraph = document.createElement(PARAGRAPH);
  const encodedMsg = cipher.encode(offset, msg);
  const encodedParagraphContent = document.createTextNode(encodedMsg);

  encodedParagraph.appendChild(encodedParagraphContent);

  return encodedParagraph;
}

function handleEncodeSubmission(resultContainer) {
  const msgToEncode = document.getElementById(TEXT_INPUT_ID).value;
  const offset = Number.parseInt(
    document.getElementById(OFFSET_INPUT_ID).value
  );

  const encodedParagraph = createEncodedParagraph(offset, msgToEncode);

  if (resultContainer.childNodes.length === 0) {
    resultContainer.appendChild(encodedParagraph);
  } else {
    resultContainer.replaceChild(
      encodedParagraph,
      resultContainer.childNodes[0]
    );
  }
}

(function () {
  const form = document.getElementById(CIPHER_FORM_ID);
  const encodedResultContainer = document.getElementById(RESULT_DIV_ID);

  form.onsubmit = (event) => {
    event.preventDefault();
    handleEncodeSubmission(encodedResultContainer);
  };
})();
