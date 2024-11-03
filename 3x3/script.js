const shuffleBtn = document.getElementById('shuffleBtn');
const cells = document.querySelectorAll('.cell');

shuffleBtn.addEventListener('click', () => {
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);

    cells.forEach((cell, index) => {
        cell.textContent = shuffledNumbers[index];
    });
});
