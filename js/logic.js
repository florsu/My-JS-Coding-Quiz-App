const startBtn = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const questionsEle = document.getElementById('questions')
const questionTitle = document.getElementById('question-title')
const answerBtns = document.getElementById('choices')
console.log(startBtn)
startBtn.addEventListener('click', startListener)
let quizIndex = 0


function startListener() {
    startScreen.classList.add('hide')
    console.log("hiding")
    questionsEle.classList.remove('hide')
    setQuestion(quiz[quizIndex])
    setChoices(quiz[quizIndex])


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
        /*
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
       
       
        */
        button.addEventListener('click', pickChoice)
        answerBtns.appendChild(button)
    })
}
function pickChoice() {
    console.log(`pickChoice ${this.innerText}`)
    quizIndex++
    if(quizIndex+1 > quiz.length) {
        quizIndex=0
    }
    setQuestion(quiz[quizIndex])
    setChoices(quiz[quizIndex])
}