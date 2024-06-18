function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = lowercase;
    if (includeUppercase) charset += uppercase;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    showPopup();
}

function showPopup() {
    const popup = document.getElementById("popup");
    const popupOverlay = document.getElementById("popupOverlay");
    popup.classList.add("show");
    popupOverlay.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
        popupOverlay.classList.remove("show");
    }, 2000);
}

function generatePasswords() {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const passwordsDiv = document.getElementById("passwords");
    passwordsDiv.innerHTML = ""; // Clear previous passwords

    for (let i = 0; i < 4; i++) {
        const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
        const passwordElement = document.createElement("div");
        passwordElement.className = "password";
        passwordElement.textContent = password;
        passwordElement.setAttribute("onclick", `copyToClipboard('${password}')`);
        passwordsDiv.appendChild(passwordElement);
    }
}