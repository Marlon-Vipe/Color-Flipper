document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById('body');

    const setColor = (color) => {
        body.style.backgroundColor = color;
    }

    const setRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const color = `rgb(${red}, ${green}, ${blue})`;
        setColor(color);
    }

    const reset = () => {
        body.style.backgroundColor = '';
    }

    document.getElementById('green').addEventListener('click', () => setColor('green'));
    document.getElementById('yellow').addEventListener('click', () => setColor('yellow'));
    document.getElementById('blue').addEventListener('click', () => setColor('blue'));
    document.getElementById('red').addEventListener('click', () => setColor('red'));
    document.getElementById('random').addEventListener('click', setRandomColor);
    document.getElementById('reset').addEventListener('click', reset);
});
