const target  = document.querySelector('.target');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const playbutton = document.querySelector('.menupage .playbtn');
const difficulty = document.querySelector('.menupage .difficulty');
const diffPage = document.querySelector('.diffPage');
const about = document.querySelector('.menupage .about');
const easy = document.querySelector('.diffPage .easy');
const medium = document.querySelector('.diffPage .medium');
const hard = document.querySelector('.diffPage .hard');

const bgMusic = document.querySelector('.bgMusic');
const hitMusic = document.querySelector('.hitMusic');


var score = 0;
var highscore = 0;

document.querySelector('.menupage').addEventListener('click', (e) => e.stopPropagation());

playbutton.addEventListener('click', () => {
    document.querySelector('.menupage').style.opacity = "0";
    setTimeout(() => {
        document.querySelector('.menupage').style.display = "none";
    }, 100)
    play()
})

difficulty.addEventListener('click', () => {
    document.querySelector('.menupage').style.opacity = "0";
    setTimeout(() => {
        document.querySelector('.menupage').style.display = "none";
    }, 100)
    play()
})

const play = () => {
    setInterval(() => {
        timer()
    }, 1000)
}

window.onload = () => {
    if(localStorage.getItem('highscore')){
        highscore = localStorage.getItem('highscore')
        highscoreText.innerHTML = `Highscore ${highscore}`
    }
    scoreText.innerHTML = score;
    respawn()
}

const respawn = () => {
    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth)
    target.style.top = `${top}px`
    target.style.left = `${left}px`
}

const gameOver = () => {
    alert(`GameOver \n You Score = ${score}`)
    if(localStorage.getItem('highscore') < score){
        localStorage.setItem('highscore', score)
        highscore = score;
        highscoreText.innerHTML = `Highscore ${highscore}`
    }
    score = 0;
    scoreText.innerHTML = score;
    timerText.innerHTML = timeLeft;

}

document.addEventListener('click', ()=> {
    bgMusic.currentTime = 0;
    bgMusic.play()
})


target.addEventListener('click', (ev) => {
    ev.stopPropagation();
    hitMusic.currentTime = 0;
    hitMusic.play()
    score += 1;
    scoreText.innerHTML = score;
    respawn();
})