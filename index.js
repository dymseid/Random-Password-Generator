const passBox = document.getElementById('pass');
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*?/";

const allChar = upperCase+lowerCase+number+symbol;

function generatePassword(){
    let pass = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > pass.length){
        pass += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passBox.value = pass;
}


function copyPassword() {
    // passBox.select();
    navigator.clipboard.writeText(passBox.value).then(() => {
        // Display the "Copied" message
        const copyMessage = document.getElementById('copy-message');
        copyMessage.textContent = "Copied!";
        copyMessage.style.display = "inline";

        // Hide the message after 2 seconds
        setTimeout(() => {
            copyMessage.style.display = "none";
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

