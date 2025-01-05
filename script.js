function changeColors() {
    const bgColor = prompt('Введите цвет фона body');
    document.body.style.backgroundColor = bgColor;

    const textColor = prompt('Введите цвет текста');
    document.body.style.color = textColor;
}

changeColors();