//Store & Clear Score and Initials
let userInitials = localStorage.getItem('Initials')
let finalTime = localStorage.getItem('Score')
console.log(`initials = ${userInitials}`)
console.log(`Score = ${finalTime}`)

const highScoresEle = document.getElementById('highscores')
const clearBtn = document.getElementById('clear')
populateScore()

clearBtn.addEventListener('click', clearListener)

function clearListener() {
    localStorage.removeItem('Initials')
    localStorage.removeItem('Score')
    userInitials = null
    finalTime = null
    populateScore()
}

function populateScore() {
    if (!userInitials || !finalTime) {
        highScoresEle.innerText = ''
        return
    }
    highScoresEle.innerText = `${userInitials} - ${finalTime}`
}