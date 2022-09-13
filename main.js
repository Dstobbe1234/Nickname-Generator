let randBtn = document.getElementById("randBtn");
let allBtn = document.getElementById("allBtn");

let nicknames = ["\"Crusher\"", "\"the Scientist\"", "\"Twinkle-toes\"", "\"the Coder\"", "\"the Jester\"", "\"the Sloth\"", "\"Quick-silver\""]

randBtn.addEventListener("click", randNickname);
allBtn.addEventListener("click", allNicknames);

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let output = document.getElementById("output");

function randNickname() {

    let random = Math.round(Math.random() * 6);
    output.innerHTML = firstName.value + nicknames[random] + lastName.value;
}

function allNicknames() {
    
    let outputString = ""
    for(let i = 0; i < nicknames.length; i++) {
        outputString += `${firstName.value} ${nicknames[i]} ${lastName.value} <br>`
    }
    output.innerHTML = outputString
}