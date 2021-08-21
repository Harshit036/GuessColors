function makeRandomColor() {
    return Math.round(Math.random() * 255);
}

function randomChoice() {
    return Math.round(Math.random() * 6);
}



function giveColor() {


    let guess = randomChoice();
    for (let i = 1; i <= 6; i++) {
        red = makeRandomColor();
        green = makeRandomColor();
        blue = makeRandomColor();

        if (i == guess) {
            document.getElementById("color").innerHTML = `${red},${green},${blue}`;
        }
        document.getElementById(`item${i}`).style.backgroundColor = `rgb(${red},${green},${blue})`;
        document.getElementById(`item${i}`).addEventListener("click", () => {

            if (document.getElementById(`item${guess}`) == document.getElementById(`item${i}`)) {
                document.getElementById('result').innerHTML = "Congratulations! You got the right answer";
                document.getElementById('result').style.color = "rgb(5, 136, 49)";
            }
            else {
                document.getElementById('result').innerHTML = "Wrong! Try Again :(";
                document.getElementById('result').style.color = "red";
            }

        });
    }
}

function reset() {
    document.getElementById('color').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`item${i}`).style.backgroundColor = "rgb(43, 226, 104)";

    }
}