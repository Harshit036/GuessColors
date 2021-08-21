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

        document.getElementById(`item${i}`).style.backgroundColor = `rgb(${red},${green},${blue})`;
        document.getElementById(`item${i}`).addEventListener("click", () => {

            if (document.getElementById(`item${guess}`) == document.getElementById(`item${i}`)) {
                document.getElementById('result').innerHTML = "Right Answer";
            }
            else {
                document.getElementById('result').innerHTML = "Wrong Answer";
            }

            if (i == guess) {
                document.getElementById("color").innerHTML = `${red},${green},${blue}`;
            }
        });
    }
}