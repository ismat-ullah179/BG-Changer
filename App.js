
let pinkbtn = document.querySelector(".pinkbtn");
let jambotron = document.querySelector(".jambotron");
const yellowbtn = document.querySelector(".yellowbtn");
const greenbtn = document.querySelector(".greenbtn");
const resetbtn = document.querySelector("#resetbtn");



const jambotronColor = () => {
    jambotron.style.backgroundColor = "red";
};

jambotronColor();

resetbtn.addEventListener("click", () => {
    jambotronColor();
    resetbtn.innerText = "Default Color";
})


greenbtn.addEventListener("click" , () => {
    jambotron.style.backgroundColor = "green";
    console.log("BG is Green Now");
})

pinkbtn.addEventListener("click", () => {
    jambotron.style.backgroundColor = "pink";
    console.log("BG is Pink Now");
})

const yellowJambo = () => {
    jambotron.style.backgroundColor = "yellow";
    console.log("BG IS YELLOW");

}

yellowbtn.addEventListener("click", () => {
    yellowJambo();
})