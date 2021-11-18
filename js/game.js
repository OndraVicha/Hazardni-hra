var hody = [];
let penize = 1000;
let pokusy = 0;
let vyhry = 0;
let rolling = 0;

var presss = new Audio();
presss.src ='./sound/start.mp3';

var roll = new Audio();
roll.src = './sound/bum.mp3';




document.getElementById('game').addEventListener('click', function () {
    if(rolling != 0 || penize == 0) return;
    penize -= 100;
    pokusy ++;
    obnovitstat()
    rolling = 1;
    presss.play();
    foto1.style.borderColor = 'blue';
    foto2.style.borderColor = 'blue';
    foto3.style.borderColor = 'blue';
    foto4.style.borderColor = 'blue';
    foto5.style.borderColor = 'blue';
    foto6.style.borderColor = 'blue';
    hod1();
    hod2();
    hod3();
    hod4();
    hod5();
    hod6();
    
   

}
);

const foto1 = document.getElementById("cube1");
const foto2 = document.getElementById("cube2");
const foto3 = document.getElementById("cube3");
const foto4 = document.getElementById("cube4");
const foto5 = document.getElementById("cube5");
const foto6 = document.getElementById("cube6");

function hod1() {
    timer1 = setInterval(rollone, 100)
    setTimeout(() => {
        clearInterval(timer1);
        foto1.style.borderColor = 'yellow'
        roll.play();
    }, (1) * 3000);
}
function rollone() {
    cube1 = Math.ceil(Math.random() * 6)
    foto1.src = `./img/kostka${cube1}.png`;
}
function hod2() {
    timer2 = setInterval(rolltwo, 100)
    setTimeout(() => {
        clearInterval(timer2);
        foto2.style.borderColor = 'yellow'
        roll.play();
    }, (1) * 7000);
}
function rolltwo() {
    cube2 = Math.ceil(Math.random() * 6)
    foto2.src = `./img/kostka${cube2}.png`;
}
function hod3() {
    timer3 = setInterval(rollthree, 100)
    setTimeout(() => {
        clearInterval(timer3);
        foto3.style.borderColor = 'yellow'
        roll.play();
    }, (1) * 11000);
}
function rollthree() {
    cube3 = Math.ceil(Math.random() * 6)
    foto3.src = `./img/kostka${cube3}.png`;
}
function hod4() {
    timer4 = setInterval(rollfour, 100)
    setTimeout(() => {
        clearInterval(timer4);
        foto4.style.borderColor = 'yellow'
        roll.play();
    }, (1) * 15000);
}
function rollfour() {
    cube4 = Math.ceil(Math.random() * 6)
    foto4.src = `./img/kostka${cube4}.png`;
}
function hod5() {
    timer5 = setInterval(rollfive, 100)
    setTimeout(() => {
        clearInterval(timer5);
        foto5.style.borderColor = 'yellow'
        roll.play();
    }, (1) * 19000);
}
function rollfive() {
    cube5 = Math.ceil(Math.random() * 6)
    foto5.src = `./img/kostka${cube5}.png`;
}
function hod6() {
    timer6 = setInterval(rollsix, 100)
    setTimeout(() => {
        clearInterval(timer6);
        foto6.style.borderColor = 'yellow'
        roll.play();
        vyhra()
    }, (1) * 23000);
}
function rollsix() {
    cube6 = Math.ceil(Math.random() * 6)
    foto6.src = `./img/kostka${cube6}.png`;
    
    
}
const statistiky = document.getElementById('statistiky');
function obnovitstat() {
    statistiky.innerHTML = `<p></p>`
    statistiky.innerHTML += `<p>Peníze: ${penize} Piechdollarů</p>`
    statistiky.innerHTML += `<p>Počet pokusů: ${pokusy}</p>`
    statistiky.innerHTML += `<p>Výhry: ${vyhry}</p>`
}

function vyhra() {
    if (cube3 == cube6 && cube1 == cube4 && cube2 == cube5){
        vyhry++;
        peníze += 10000;
        obnovitstat()
        setTimeout(1000)
     }
    else if(cube1 == cube4 || cube2 == cube5 || cube3 == cube6){
    vyhry++;
    penize += 400;
    obnovitstat()
    setTimeout(1000)
 }
 else if (cube1 == cube4 && cube2 == cube5 || cube2 == cube5 && cube3 == cube6 || cube3 == cube6 && cube1 == cube4){
    vyhry++;
    peníze += 1000;
    obnovitstat()
    setTimeout(1000)
 }
else if (cube1 == foto1 && cube2 == foto2 && cube3 == foto3 && cube4 == foto4 && cube5 == foto5 && cube6 == foto6 ){
    vyhry++;
    peníze += 100000;
    obnovitstat()
    setTimeout(1000)
}
 else{
    setTimeout(1000)
 }
}
