function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box');
    gradient.addEventListener('mousemove', color);
    gradient.addEventListener('mouseout', gradientOut);
    let resultElement = document.getElementById('result');

    function color(e){
        let percent = Math.floor(e.offsetX / e.target.clientWidth * 100);
        resultElement.textContent = percent + "%";

    }

    function gradientOut(e){
        resultElement.textContent = '';
    }
}