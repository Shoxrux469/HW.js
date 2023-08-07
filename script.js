
// 1 yes 
let askForName = prompt('What is your name?')
if (askForName === null) {
  console.log('Wrong')  
} else if (askForName.length % 2 === 1) {
  console.log('Error')
} else {
  console.log(askForName)
}
// 2 yes 
function even() {
    let x = +prompt('Choose a number')
    if (x % 2 === 0) {
        console.log('Even')
    }
    else if (x % 2 === 1){
        console.log('Odd')
    }
    else {
        console.log('Дэбил')
    }
}
even()
// 3 yes

let question = prompt("Какое действие хотите осуществить?(+ - * /)")

if(question === "+" || question === "-" || question === "/" || question === "*" ) {
    let a = +prompt("a")
    let b = +prompt("b")
    switch (question) {
        case '+':
            console.log(a + b)
            break;
        case '-':
            console.log(a - b)
            break;
        case '*':
            console.log(a * b)
            break;
        case '/':
            console.log(a / b)
            break;
    }
} else {
    console.log('Дэбил')
}

// 4 yes
function season() {
    let askForSeason = +prompt('Month (1-12)')
    if (askForSeason === 12 || askForSeason === 1 || askForSeason === 2) {
        console.log('winter')
    }
    else if (askForSeason === 3 || askForSeason === 4 || askForSeason === 5) {
        console.log('spring')
    }
    else if (askForSeason === 6 || askForSeason === 7 || askForSeason === 8) {
        console.log('summer')
    }
    else if (askForSeason === 9 || askForSeason === 10 || askForSeason === 11) {
        console.log('autumn')
    }
    else {
        console.log('Дэбил')
    }
}
season()