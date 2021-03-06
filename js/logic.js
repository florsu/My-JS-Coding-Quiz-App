const startBtn = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const questionsEle = document.getElementById('questions')
const questionTitle = document.getElementById('question-title')
const answerBtns = document.getElementById('choices')
const endScreen = document.getElementById('end-screen')
const submitBtn = document.getElementById('submit')
const timeEle = document.getElementById('time')
const feedbackEle = document.getElementById('feedback')
const finalScoreEle = document.getElementById('final-score')

startBtn.addEventListener('click', startListener)
submitBtn.addEventListener('click', submitListener)

let quizIndex = 0
let time = 60 * 5
let timer

function startListener() {
    startScreen.classList.add('hide')
    console.log("hiding")
    questionsEle.classList.remove('hide')
    setQuestion(quiz[quizIndex])
    setChoices(quiz[quizIndex])
    timer = setInterval(updateTimer, 1000)
    updateTimer()
}

function submitListener() {
    let userInitials = document.getElementById("initials").value
    let finalTime = formatTime()
    localStorage.setItem('Initials', userInitials)
    localStorage.setItem('Score', finalTime)
    window.location.href = 'highscores.html'
}

function setQuestion(question) {
    questionTitle.innerText = question.quiz
}

function setChoices(question) {
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
    question.choices.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.choice
        button.classList.add('btn')
        console.log(answer.choice)
        button.dataset.correct = answer.correct
        button.addEventListener('click', pickChoice)
        answerBtns.appendChild(button)
    })
}

function pickChoice() {
    console.log(`pickChoice ${this.innerText} correct ${this.dataset.correct}`)
    if (this.dataset.correct == 'false') {
        feedbackEle.classList.remove('hide')
        setTimeout(hideFeedback, 1000)
        feedbackEle.innerHTML = 'Wrong!'
        subtractTime(10)
        return
    }
    feedbackEle.classList.remove('hide')
    feedbackEle.innerHTML = 'Correct!'
    setTimeout(nextQuestion, 1000)
}

function nextQuestion() {
    quizIndex++
    if (quizIndex + 1 > quiz.length) {
        endQuiz()
        return
    }
    hideFeedback()
    setQuestion(quiz[quizIndex])
    setChoices(quiz[quizIndex])
}

//Timer Logic
function subtractTime(seconds) {
    time = time - seconds
    if (time < 0) {
        time = 0
    } else {
        time = time
    }
    timeEle.innerHTML = formatTime()
    console.log(`remaining seconds = ${formatTime()}`)
    if (time == 0) {
        feedbackEle.classList.remove('hide')
        feedbackEle.innerHTML = 'GAME OVER!'
        setTimeout(endQuiz, 1000)
    }
}

function updateTimer() {
    subtractTime(1)
}

function formatTime() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    return `${minutes}:${seconds}`
}

function hideFeedback() {
    feedbackEle.classList.add('hide')
}

function endQuiz() {
    hideFeedback()
    clearInterval(timer)
    questionsEle.classList.add('hide')
    endScreen.classList.remove('hide')
    finalScoreEle.innerHTML = formatTime()
}