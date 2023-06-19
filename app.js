// ------------FirstTask--------------------
let age = +prompt("Введіть свій вік:", 20);

if (age >= 18 && age <= 45) {
  alert("Ви нам підходите, вітаю!");
} else {
  alert("Йдіть звідси, ви нам не підходите");
}

// ------------SecondTask--------------------
let a = +prompt("Введіть число для змінної a:", 4);
let b = +prompt("Введіть число для змінної b:", 5);

if (a > 3 && a < 12 && b >= 5 && b < 13) {
  alert("ВІРНО!");
} else {
  alert("не вірно...");
}

// ------------LastTask--------------------
let userName = prompt("Ваше ім'я?", "Вася");
let userSum = +prompt("Ваша сумма на депозиті?", "2000");
let userDataDepozit = +prompt(
  "Скільки місяців хочете тримати сумму на депозиті?",
  12
);

let termDepozit;
let profit;

if (userDataDepozit < 6) {
  termDepozit = 15;
  profit = ((userSum * termDepozit) / 100 / 12) * userDataDepozit;
} else if (userDataDepozit >= 6 && userDataDepozit <= 9) {
  termDepozit = 16;
  profit = ((userSum * termDepozit) / 100 / 12) * userDataDepozit;
} else {
  termDepozit = 17;
  profit = ((userSum * termDepozit) / 100 / 12) * userDataDepozit;
}

alert(
  `Шановний ${userName}, 
Ви внесли ${userSum} грн., під ${termDepozit}% річних, 
на трермін ${userDataDepozit} місяців. 
За цей період часу Ви заробите ${profit} грн.`
);
