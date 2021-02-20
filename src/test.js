import string from './css.js'
let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)
console.log(n);

let time = 100

const run = ()=>{
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    console.log(n + ':' + string.substr(0,n));
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight
}

const play = ()=>{
    return setInterval(run, time)
}
let id = play()
const pause = ()=>{
    window.clearInterval(id)
}

btnPause.onclick = ()=>{
    pause()
}

btnPlay.onclick = ()=>{
    id = play()
}

btnSlow.onclick = ()=>{
    pause()
    time = 300
    id = play()
}

btnNormal.onclick = ()=>{
    pause()
    time = 100
    id = play()
}

btnFast.onclick = ()=>{
    pause()
    time = 0
    id = play()
}