var pos = 1;

function stepAnimation () {
    pos += 1;
    let prompt = document.getElementsByClassName('prompt')[0];
    let text = prompt.innerText;
    console.log(text);
    prompt.innerHTML = '<span class="title">' + text.substr(0, pos) + '</span>' + text.substr(pos, text.length);

    if (pos < text.length) {
        setTimeout(stepAnimation, 400 - Math.round(Math.random()*200));
    }
}

setTimeout(stepAnimation, 300);

function showButtons() {
    document.getElementsByClassName('buttons')[0].className = 'buttons-show'
}

setTimeout(showButtons, 5000);
