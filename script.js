const qKey = new Audio('CKey.mp3');
const wKey = new Audio('CSharpKey.mp3');
const eKey = new Audio('DKey.mp3');
const aKey = new Audio('DSharpKey.mp3');
const sKey = new Audio('EKey.mp3');
const dKey = new Audio('FKey.mp3');
const zKey = new Audio('FSharpKey.mp3');
const xKey = new Audio('GKey.mp3');
const cKey = new Audio('GSharpKey.mp3');


//audio plays when button is clicked
function firstKey() {
    qKey.play();
    qKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'C Key';
}

function secondKey() {
    wKey.play();
    wKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'C# Key';
}

function thirdKey() {
    eKey.play();
    eKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'D Key';
}

function fourthKey() {
    aKey.play();
    aKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'D# Key';
}

function fifthKey() {
    sKey.play();
    sKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'E Key';
}

function sixthKey() {
    dKey.play();
    dKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'F Key';
}

function seventhKey() {
    zKey.play();
    zKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'F# Key';
}

function eighthKey() {
    xKey.play();
    xKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'G Key';
}

function ninthKey() {
    cKey.play();
    cKey.currentTime = 0;
    document.getElementById('message').innerHTML = 'G# Key';
}

//audio plays when keys are pressed
document.addEventListener("keydown", function (event) {
    plaY(event.key);
});

function plaY(key) {
    switch (key) {

        case "q":
            qKey.play();
            qKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'C Key';
            break;
        
        case "w":
            wKey.play();
            wKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'C# Key';
            break;
        
        case "e":
            eKey.play();
            eKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'D Key';
            break;
        
        case "a":
            aKey.play();
            aKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'D# Key';
            break;
        
        case "s":
            sKey.play();
            sKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'E Key';
            break;
        
        case "d":
            dKey.play();
            dKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'F Key';
            break;
        
        case "z":
            zKey.play();
            zKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'F# Key';
            break;
        
        case "x":
            xKey.play();
            xKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'G Key';
            break;
        
        case "c":
            cKey.play();
            cKey.currentTime = 0;
            document.getElementById('message').innerHTML = 'G# Key';
            break;
    }
}