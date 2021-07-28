const startBtn = document.getElementById('start')
console.log(startBtn)
startBtn.addEventListener('click', startListener)
let clicks=0
function startListener() {
    clicks++
    console.log(`start button has been clicked ${clicks} times`)
}