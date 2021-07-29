const startBtn = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const questionsEle = document.getElementById('questions')
const questionTitle = document.getElementById('question-title')
console.log(startBtn)
startBtn.addEventListener('click', startListener)


function startListener() {
    startScreen.classList.add('hide')
    console.log("hiding")
    questionsEle.classList.remove('hide')
    
}
function setQuestion() {
    questionTitle.innerText = question.question
}
