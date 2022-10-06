console.log("tictactoe");

let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn = ' X';
let isgameover = false;
//Function to change turn
const changeTurn = ()=>{
    return turn === " X"? " O" : " X";
}

//Function to check for Win

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 7, 0],
        [3, 4, 5, 5, 17, 0],
        [6, 7, 8, 5, 28, 0],
        [0, 3, 6, -5, 17, 90],
        [1, 4, 7, 5, 17, 90],
        [2, 5, 8, 15, 17, 90],
        [0, 4, 8, 5, 17, 45],
        [2, 4, 6, 5, 17, 135],
    ];

    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " " +  "Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// music.play();
//Game Logic
let boxes = document.getElementsByClassName("box");
// console.log(Array.from(boxes).length)
//because boxes returns a html collection
Array.from(boxes).forEach(element =>{
    //element is the div whose id is box

    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click' ,()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });

    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})


