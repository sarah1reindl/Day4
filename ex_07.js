document.addEventListener('DOMContentLoaded', () => {
    const changeColorBtn = document.querySelector('.cart-btn');
    changeColorBtn.textContent = 'CHANGE COLOR';
    changeColorBtn.addEventListener('click', (event) => {
        event.preventDefault(); 
        document.body.style.backgroundColor = getRandomColor();
    });
    function getRandomColor() {
        const letters = '0123456789ABCDEF'; 
        let color = '#'; 
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]; 
        }
        return color; 
    }
});
