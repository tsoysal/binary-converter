const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const text = document.getElementById('text');
const display = document.querySelector('.p');

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

function binary2Text(binary) {
    let binString = '';

    binary.split(' ').map(function (bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
    });
    return binString;
}


btn1.addEventListener("click", () => {
    display.innerText = (text2Binary(text.value));
})
btn2.addEventListener("click", () => {
    display.innerText = (binary2Text(text.value));
})

