import cipher from "./cipher.js";

const ENCODE_BUTTON_ID = "encode";
const RESULT_DIV_ID = "encodeResult";
const TEXT_INPUT_ID = "msg";
const OFFSET_INPUT_ID = "offset";

function createEncodedParagraph(offset, msg) {
  const encodedParagraph = document.createElement("p");
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
  const encodeButton = document.getElementById(ENCODE_BUTTON_ID);
  const encodedResultContainer = document.getElementById(RESULT_DIV_ID);

  encodeButton.onclick = () => {
    handleEncodeSubmission(encodedResultContainer);
  };
})();
