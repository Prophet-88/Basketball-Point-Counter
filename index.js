let home_p = document.getElementById("h_score")
let guest_p = document.getElementById("g_score")
let hScore = 0
let gScore = 0

function plus_1(){
    hScore += 1
    home_p.innerText = hScore
}

function plus_2(){
    hScore += 2
    home_p.innerText = hScore
}

function plus_3(){
    hScore += 3
    home_p.innerText = hScore
}

function g_plus1(){
    gScore += 1
    guest_p.innerText = gScore
}

function g_plus2(){
    gScore += 2
    guest_p.innerText = gScore
}

function g_plus3(){
    gScore += 3
    guest_p.innerText = gScore
}