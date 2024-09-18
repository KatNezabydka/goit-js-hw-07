const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    output.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});