import cipher from "./cipher.js";

console.log(cipher);

const ENCODE_BUTTON_ID = "encode";
const RESULT_DIV_ID = "encodeResult";
const TEXT_INPUT_ID = "msg";

function createEncodedParagraph(msg) {
  const encodedParagraph = document.createElement("p");
  const encodedMsg = cipher.encode(msg);
  const encodedParagraphContent = document.createTextNode(encodedMsg);

  encodedParagraph.appendChild(encodedParagraphContent);

  return encodedParagraph;
}

function handleEncodeSubmission(resultContainer) {
  const msg = document.getElementById(TEXT_INPUT_ID).value;

  const encodedParagraph = createEncodedParagraph(msg);

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
  const encodeButton = document.getElementById(ENCODE_BUTTON_ID);
  const encodedResultContainer = document.getElementById(RESULT_DIV_ID);

  encodeButton.onclick = () => {
    handleEncodeSubmission(encodedResultContainer);
  };
})();
