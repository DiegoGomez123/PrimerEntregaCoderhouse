const secretNumber = Math.trunc(Math.random() * 11) + 1;
document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)

    if (!guess){
        document.querySelector('.message').textContent = 'No insertaste numero!'
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correcto!!'
    } else if (guess !== secretNumber){
        document.querySelector('.message').textContent = 'Erraste!'
    }
})