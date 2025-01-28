

let counter = 0
let count = document.getElementById("count")
let increment = document.getElementById("increase");
let decrement = document.getElementById("decrease")

count.innerHTML = counter;

increment.addEventListener("click", () => {
    counter++;
    count.innerHTML = counter;
})

decrement.addEventListener("click", () => {
    counter--;
    count.innerHTML = counter;
})

