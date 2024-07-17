let generateBtn = document.getElementById('generate-btn')
let copyBtn = document.getElementById('copy-btn')
let generatePassword = document.getElementById('generator-password')

generateBtn.onclick = () => {
    let length = document.getElementById('length').value;
    let lowercase = document.getElementById('lowercase').checked;
    let uppercase = document.getElementById('uppercase').checked;
    let number = document.getElementById('numbers').checked;
    let symbol = document.getElementById('symbols').checked;

    let charset = '';
    if (lowercase) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (number) {
        charset += '0123456789';
    }
    if (symbol) {
        charset += '!@#$%^&*()_-+={}[];\':",<.>/?';
    }

    if (!charset) {
        alert('Please select at least one character type.')
        return
    }

    let password = '';

    for (var i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    generatePassword.textContent = password;
    copyBtn.style.display = 'block';

    copyBtn.onclick = () => {
        let copy = generatePassword.textContent;
        navigator.clipboard.writeText(copy).then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(error => {
            alert('Failed to copy password: ' + error)
        });
    }

}