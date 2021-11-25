
//audio plays when button is clicked
function firstKey() {
    document.getElementById('aOne').play();
    document.getElementById('aOne').currentTime = 0;
    document.getElementById('message').innerHTML = 'C Key';
}

function secondKey() {
    document.getElementById('aTwo').play();
    document.getElementById('aTwo').currentTime = 0;
    document.getElementById('message').innerHTML = 'C# Key';
}

function thirdKey() {
    document.getElementById('aThree').play();
    document.getElementById('aThree').currentTime = 0;
    document.getElementById('message').innerHTML = 'D Key';
}

function fourthKey() {
    document.getElementById('aFour').play();
    document.getElementById('aFour').currentTime = 0;
    document.getElementById('message').innerHTML = 'D# Key';
}

function fifthKey() {
    document.getElementById('aFive').play();
    document.getElementById('aFive').currentTime = 0;
    document.getElementById('message').innerHTML = 'E Key';
}

function sixthKey() {
    document.getElementById('aSix').play();
    document.getElementById('aSix').currentTime = 0;
    document.getElementById('message').innerHTML = 'F Key';
}

function seventhKey() {
    document.getElementById('aSeven').play();
    document.getElementById('aSeven').currentTime = 0;
    document.getElementById('message').innerHTML = 'F# Key';
}

function eighthKey() {
    document.getElementById('aEight').play();
    document.getElementById('aEight').currentTime = 0;
    document.getElementById('message').innerHTML = 'G Key';
}

function ninthKey() {
    document.getElementById('aNine').play();
    document.getElementById('aNine').currentTime = 0;
    document.getElementById('message').innerHTML = 'G# Key';
}


//audio plays when keys are pressed
document.addEventListener("keydown", function (event) {
    plaY(event.key);
});

function plaY(key) {
    switch (key) {

        case "q":
            document.getElementById('aOne').play();
            document.getElementById('aOne').currentTime = 0;
            document.getElementById('message').innerHTML = 'C Key';
            break;
        
        case "w":
            document.getElementById('aTwo').play();
            document.getElementById('aTwo').currentTime = 0;
            document.getElementById('message').innerHTML = 'C# Key';
            break;
        
        case "e":
            document.getElementById('aThree').play();
            document.getElementById('aThree').currentTime = 0;
            document.getElementById('message').innerHTML = 'D Key';
            break;
        
        case "a":
            document.getElementById('aFour').play();
            document.getElementById('aFour').currentTime = 0;
            document.getElementById('message').innerHTML = 'D# Key';
            break;
        
        case "s":
            document.getElementById('aFive').play();
            document.getElementById('aFive').currentTime = 0;
            document.getElementById('message').innerHTML = 'E Key';
            break;
        
        case "d":
            document.getElementById('aSix').play();
            document.getElementById('aSix').currentTime = 0;
            document.getElementById('message').innerHTML = 'F Key';
            break;
        
        case "z":
            document.getElementById('aSeven').play();
            document.getElementById('aSeven').currentTime = 0;
            document.getElementById('message').innerHTML = 'F# Key';
            break;
        
        case "x":
            document.getElementById('aEight').play();
            document.getElementById('aEight').currentTime = 0;
            document.getElementById('message').innerHTML = 'G Key';
            break;
        
        case "c":
            document.getElementById('aNine').play();
            document.getElementById('aNine').currentTime = 0;
            document.getElementById('message').innerHTML = 'G# Key';
            break;
    }
}
