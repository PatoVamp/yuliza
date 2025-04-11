const circulos = document.querySelectorAll('.circleDecoration');

circulos.forEach(circulo => {
    const color = circulo.getAttribute('data-color');
    circulo.style.backgroundColor = color;
});