const firstname = 'Christian';
const lastname = 'Kirschberg';

const fullname = firstname + " " + lastname; // string concatenation
const myHeight = 1.80; // meter

const number1 = 2; // number
const number2 = 4; // number

console.log(number2 + number1);


console.log(fullname);

console.log(fullname.length);

console.log(fullname.toLowerCase())

const countFoodInFridge = 0;
const doIHaveFood = countFoodInFridge > 0

console.log(doIHaveFood);


//document.querySelector("#clickButton") // udvælger et element fra DOM'en

// function som hedder handleClick
function handleClick() {
    const count = document.getElementById("count").textContent;
    const newCount = Number(count) +1
    
    console.log(newCount) // skrive i console
    document.getElementById("count").textContent = newCount; // ændrer html dokumentet.
};

// tilføjer vi en event-listener på knappen, og kalder handleClick funktionen når man klikker.
                                    //(click) navnet på det event vi lytter på
document.getElementById("clickButton").addEventListener("click", handleClick);


const likeButton = document.getElementById("likeButton"); // gemme ref. til like button så kan jeg bruge den 2 gange.
likeButton.addEventListener("click", function() { // tilføj event listener til knappen og lytter på click
    likeButton.classList.toggle("liked"); // toggle css klassen liked på knappen selv.
})

document.getElementById("showButton").addEventListener("click", function() {
    document.getElementById("moreText").classList.toggle("hidden");
})


function handleAddTodo() {
    const input = document.getElementById("todoText");
    const todoText = input.value // læser det brugeren har skrevet i input feltet
    const li = document.createElement("li"); // opretter et nyt li-element
    li.textContent = todoText;
    document.getElementById("todos").appendChild(li);
    input.value = "";
}

const btnAddTodo = document.getElementById("btnAddTodo");
btnAddTodo.addEventListener("click", handleAddTodo);

document.getElementById("todoText").addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        handleAddTodo();
    }
    
});
