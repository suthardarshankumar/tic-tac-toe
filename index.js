let x = 1;
let c11, c12, c13, c21, c22, c23, c31, c32, c33;
let ic11, ic12, ic13, ic21, ic22, ic23, ic31, ic32, ic33;

document.getElementById("box1").addEventListener("click", mark1);

document.getElementById("box2").addEventListener("click", mark2);

document.getElementById("box3").addEventListener("click", mark3);

document.getElementById("box4").addEventListener("click", mark4);

document.getElementById("box5").addEventListener("click", mark5);

document.getElementById("box6").addEventListener("click", mark6);

document.getElementById("box7").addEventListener("click", mark7);

document.getElementById("box8").addEventListener("click", mark8);

document.getElementById("box9").addEventListener("click", mark9);

function mark1() {
    document.getElementById("box1").innerHTML = `<img id="img1" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        document.getElementById("img1").src = "cross.png";
        ic11 = 'cr';
    }
    else {
        document.getElementById("img1").src = "circle.png";
        ic11 = 'ci';
    }
    c11 = 11;

    checkWin()
    document.getElementById("box1").removeEventListener("click", mark1);
}

function mark2() {
    document.getElementById("box2").innerHTML = `<img id="img2" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        document.getElementById("img2").src = "cross.png";
        ic12 = 'cr';
    }
    else {
        document.getElementById("img2").src = "circle.png";
        ic12 = 'ci';
    }
    c12 = 12;
    checkWin()
    document.getElementById("box2").removeEventListener("click", mark2);
}

function mark3() {
    document.getElementById("box3").innerHTML = `<img id="img3" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        document.getElementById("img3").src = "cross.png";
        ic13 = 'cr';
    }
    else {
        document.getElementById("img3").src = "circle.png";
        ic13 = 'ci';
    }
    c13 = 13;
    checkWin()
    document.getElementById("box3").removeEventListener("click", mark3);
}

function mark4() {
    document.getElementById("box4").innerHTML = `<img id="img4" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        document.getElementById("img4").src = "cross.png";
        ic21 = 'cr';
    }
    else {
        document.getElementById("img4").src = "circle.png";
        ic21 = 'ci';
    }
    c21 = 21;
    checkWin()
    document.getElementById("box4").removeEventListener("click", mark4);
}

function mark5() {
    document.getElementById("box5").innerHTML = `<img id="img5" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        document.getElementById("img5").src = "cross.png";
        ic22 = 'cr';
    }
    else {
        document.getElementById("img5").src = "circle.png";
        ic22 = 'ci';
    }
    c22 = 22;
    checkWin()
    document.getElementById("box5").removeEventListener("click", mark5);
}

function mark6() {
    document.getElementById("box6").innerHTML = `<img id="img6" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        document.getElementById("img6").src = "cross.png";
        ic23 = 'cr';
    }
    else {
        document.getElementById("img6").src = "circle.png";
        ic23 = 'ci';
    }
    c23 = 23;
    checkWin()
    document.getElementById("box6").removeEventListener("click", mark6);
}

function mark7() {
    document.getElementById("box7").innerHTML = `<img id="img7" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        ic31 = 'cr';
        document.getElementById("img7").src = "cross.png";
    }
    else {
        document.getElementById("img7").src = "circle.png";
        ic31 = 'ci';
    }
    c31 = 31;
    checkWin()
    document.getElementById("box7").removeEventListener("click", mark7);
}

function mark8() {
    document.getElementById("box8").innerHTML = `<img id="img8" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        document.getElementById("img8").src = "cross.png";
        ic32 = 'cr';
    }
    else {
        document.getElementById("img8").src = "circle.png";
        ic32 = 'ci';
    }
    c32 = 32;
    checkWin()
    document.getElementById("box8").removeEventListener("click", mark8);
}

function mark9() {
    document.getElementById("box9").innerHTML = `<img id="img9" class="image" src="" alt=""></img>`
    x++;
    if (x % 2 == 0) {
        document.getElementById("img9").src = "cross.png";
        ic33 = 'cr';
    }
    else {
        document.getElementById("img9").src = "circle.png";
        ic33 = 'ci';
    }
    c33 = 33;
    checkWin()
    document.getElementById("box9").removeEventListener("click", mark9);
}

function checkWin() {
    if (
        (c11 == 11 && c12 == 12 && c13 == 13 && ic11 == 'cr' && ic12 == 'cr' && ic13 == 'cr') ||
        (c21 == 21 && c22 == 22 && c23 == 23 && ic21 == 'cr' && ic22 == 'cr' && ic23 == 'cr') ||
        (c31 == 31 && c32 == 32 && c33 == 33 && ic31 == 'cr' && ic32 == 'cr' && ic33 == 'cr') ||
        (c11 == 11 && c21 == 21 && c31 == 31 && ic11 == 'cr' && ic21 == 'cr' && ic31 == 'cr') ||
        (c12 == 12 && c22 == 22 && c32 == 32 && ic12 == 'cr' && ic22 == 'cr' && ic32 == 'cr') ||
        (c13 == 13 && c23 == 23 && c33 == 33 && ic13 == 'cr' && ic23 == 'cr' && ic33 == 'cr') ||
        (c11 == 11 && c22 == 22 && c33 == 33 && ic11 == 'cr' && ic22 == 'cr' && ic33 == 'cr') ||
        (c13 == 13 && c22 == 22 && c31 == 31 && ic13 == 'cr' && ic22 == 'cr' && ic31 == 'cr')
    ) {
        document.getElementById("box1").removeEventListener("click", mark1);
        document.getElementById("box2").removeEventListener("click", mark2);
        document.getElementById("box3").removeEventListener("click", mark3);
        document.getElementById("box4").removeEventListener("click", mark4);
        document.getElementById("box5").removeEventListener("click", mark5);
        document.getElementById("box6").removeEventListener("click", mark6);
        document.getElementById("box7").removeEventListener("click", mark7);
        document.getElementById("box8").removeEventListener("click", mark8);
        document.getElementById("box9").removeEventListener("click", mark9);
        document.getElementById("winnerName").innerHTML = `Cross Win Game`;
    }

    if ((c11 == 11 && c12 == 12 && c13 == 13 && ic11 == 'ci' && ic12 == 'ci' && ic13 == 'ci') ||
        (c21 == 21 && c22 == 22 && c23 == 23 && ic21 == 'ci' && ic22 == 'ci' && ic23 == 'ci') ||
        (c31 == 31 && c32 == 32 && c33 == 33 && ic31 == 'ci' && ic32 == 'ci' && ic33 == 'ci') ||
        (c11 == 11 && c21 == 21 && c31 == 31 && ic11 == 'ci' && ic21 == 'ci' && ic31 == 'ci') ||
        (c12 == 12 && c22 == 22 && c32 == 32 && ic12 == 'ci' && ic22 == 'ci' && ic32 == 'ci') ||
        (c13 == 13 && c23 == 23 && c33 == 33 && ic13 == 'ci' && ic23 == 'ci' && ic33 == 'ci') ||
        (c11 == 11 && c22 == 22 && c33 == 33 && ic11 == 'ci' && ic22 == 'ci' && ic33 == 'ci') ||
        (c13 == 13 && c22 == 22 && c31 == 31 && ic13 == 'ci' && ic22 == 'ci' && ic31 == 'ci')) {
        document.getElementById("box1").removeEventListener("click", mark1);
        document.getElementById("box2").removeEventListener("click", mark2);
        document.getElementById("box3").removeEventListener("click", mark3);
        document.getElementById("box4").removeEventListener("click", mark4);
        document.getElementById("box5").removeEventListener("click", mark5);
        document.getElementById("box6").removeEventListener("click", mark6);
        document.getElementById("box7").removeEventListener("click", mark7);
        document.getElementById("box8").removeEventListener("click", mark8);
        document.getElementById("box9").removeEventListener("click", mark9);
        document.getElementById("winnerName").innerHTML = `Circle Win Game`;
    }


}
