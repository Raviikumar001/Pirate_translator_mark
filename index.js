const inputTextArea = document.querySelector("#input-text-area");
const outputDiv = document.querySelector("#output-div");
const translateButton = document.querySelector("#translate-btn");
const miniApi = "https://api.funtranslations.com/translate/pirate.json";

const translate = (text) => {
  return miniApi + "?text=" + text;
};
const errorHandle = (err) => {
  console.log(err);
  alert("Something went wrong, Please try again later!");
};

const transelateText = () => {
  const textToTranslate = inputTextArea.value;
  fetch(translate(textToTranslate))
    .then((res) => res.json())
    .then((json) => {
      const tranlatedText = json.contents.translated;
      outputDiv.innerText = tranlatedText;
    })
    .catch(errorHandle);
};

translateButton.addEventListener("click", transelateText);