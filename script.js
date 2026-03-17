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





// Js - objekt
// Samling af data

//objekt
const teacher1 = { 
    email: "jrs@ek.dk",
    firstname: 'Jeppe',
    lastname: "Stockmar",
    address: {
        street: "Jægersborg alle",
        number: 13,
        city: "Charlottenlund"
    }
};

const teacher2 = { 
    email: "kirs@ek.dk",
    firstname: 'Christian',
    lastname: "Kirschberg", 
    age: 17,
    address: {
        street: "Vesterbrovej",
        number: 1,
        city: "Copenhagen"
    }
};



document.getElementById("jeppeSerPåSinTelefon").textContent = "";
//.                   teacher er et navn som jeg har valgt her
                    // definerer jeg en parameter og giver den et navn
function printTeacher(student) {
    let tal = 1;
    tal = tal +1
    console.log(tal);

    // bruger jeg parameteren ud fra dens navn
    document.getElementById("jeppeSerPåSinTelefon").textContent = document.getElementById("jeppeSerPåSinTelefon").textContent +
    " Hej " + student.firstname 
        + " " + student.lastname + " din email er " + student.email + " hvis du er for gammel til at huske den" + 
        " " + student.address.street

        console.log(student.address)
}



//printTeacher(teacher2)


// Array - liste af noget.
const teachers = []; // tom liste
teachers.push(teacher1);
teachers.push(teacher2);
// Nu ligger teacher1 objektet og teacher2 objektet i et array.

teachers.forEach((teacher) => {
    printTeacher(teacher);
})



// funktion som returnerer noget.
function randomNumber1to3() {
    const randomNumber = Math.floor(Math.random()*3)+1;
    return randomNumber; // returnerer et tilfældigt tal
}

const random2 = randomNumber1to3();
alert(random2)






const quiz1 = {
    // skriv et spørgsmål og et svar. 2 Attributter. question og answer
}

const quiz2 = {

}