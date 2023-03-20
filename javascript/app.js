/* console.log("HALO DISANA MANTAP!");
let random = Math.random();
if (random >= 0.5) {
  console.log("Your number is bigger or equal than 0.5");
} else {
  console.log("Your number is lower than 0.5");
}
console.log(random); */

/* let num = Math.floor(Math.random() * 10) + 1;

if (num % 2 == 0) {
  console.log("even");
  console.log(num);
}  */

/* const age = prompt("umur berapa");

if (age >= 0 && age < 5) {
  console.log("lu masih bayi");
} else if (age >= 5 && age < 10) {
  console.log("Lu masih bocah");
} else if (age >= 10 && age < 65) {
  console.log("Lu udah dewasa");
} else if (age > 65) {
  console.log("Lu tua banget anjg");
} else {
  console.log("inccorect age");
} */

/* function getColor(phrase) {
  if (phrase == "go") {
    console.log("green");
  } else if (phrase == "stop") {
    console.log("red");
  } else if (phrase == "slow") {
    console.log("yellow");
  } else {
    console.log("purple");
  }
} */

/* const password = prompt("Please enter the password"); */

/* if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password");
  } else {
    console.log("Incorrecta password");
  }
} else {
  console.log("Incorrecta password");
} */

/* if (password.length >= 6 && password.indexOf(" ") === -1) {
  if (password.length <= 10) {
    console.log("Valid password");
  } else {
    console.log("Kebanyakan");
  }
} else {
  console.log("Incorrect password");
} */

//KODE SWTICH
/* const day = 4;
switch (day) {
  case 1:
    console.log("SENIN");
    break;
  case 2:
    console.log("SELASA");
    break;
  case 3:
    console.log("RABU");
    break;
  case 4:
    console.log("KAMIS");
    break;
  case 5:
    console.log("JUMAT");
    break;
  default:
    console.log("hari apaan nih jing");
} */

/* for (let i = 1; i <= 6; i++) {
  console.log("kucing"); 
} */
//loop kata kucing 6x
//kode pertama itu start, kedua endnya, ketiga kelipatan

/* for (let num = 25; num >= 0; num -= 5) {
  console.log(num); //loop angka 25 sampe 0 kelipatan 5
} */

/* const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
} */

//BAGIAN MENELUSURI ISI DALAN ARRAY

/* const randomName = [
  ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"],
  ["Dog", "Cat", "Hamster", "Mouse", "Elephant"],
  ["Wall", "Climb", "Testing", "Bulls", "Hoggs"],
]; */

/* for (let i = 0; i < randomName.length; i++) {
  const row = randomName[i];
  console.log(`ROW #${i + 1}`); // ini untuk menampilkan title cnth: ROW #1
  for (let j = 0; j < row.length; j++) {
    console.log(`     ${row[j]}`);
  }
} */

/* for (let row of randomName) {
  for (let animals of row) {
    console.log(animals);
  }
} */

/* let count = 0;
while (count < 10) {
  count++;
  console.log(count);
} */

/* const password = "Hanjing";

let type = prompt("enter your password");
while (type !== password) {
  type = prompt("enter your password");
}
console.log("logged in");
 */

/* let max = parseInt(prompt("Enter your maximum number!"));
while (!parseInt(max)) {
  max = prompt("Enter your maximum number!");
  if (max === "q") break;
}
if (max === "q") {
  console.log("AHA CUPU MASA QUIT");
} else {
  const random = Math.floor(Math.random() * max) + 1;

  let guess = parseInt(prompt("Enter your guess number!"));
  let att = 1;

  while (parseInt(guess) !== random) {
    if (guess === "q") break;
    att++;
    if (guess > random) {
      guess = prompt("Your number is too high");
    } else {
      guess = prompt("Your number is too low");
    }
  }
  if (guess === "q") {
    console.log("AHA CUPU MASA QUIT");
  } else {
    console.log("Congratz bitch");
    console.log(`Your attempts is ${att}`);
  }
}
 */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let row of numbers) {
  console.log(row * row);
}
 */

/* const nilai = [
  { ardi: 70, gilang: 40, abeng: 80, firman: 75, halar: 65 },
  { ardi: 70, gilang: 40, abeng: 80, firman: 75, halar: 65 },
]; */

/* const nilai = { ardi: 70, gilang: 40, abeng: 80, firman: 75, halar: 65 }; */

//FUNCTION
//FUNCTION
//FUNCTION

/* function printHeart() {
  console.log("<3")
}

function rant(message) {
  console.log(message.toUpperCase())
  console.log(message.toUpperCase())
  console.log(message.toUpperCase())
}
rant("I hate beets") */

/* function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName}`);
}

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result); // kode untuk merepeat kata, str= katanya numTimes= repeat berapa kali
} */

//KODE JIKA DIE1 DAN DIE2 MATCH AKAN KELUAR TULISAN SNAKEEYES JIKA TIDAK MATCH TULISANNYA NOT SNAKE EYES
/* function isSnakeEyes(die1, die2) {
  if (die1 === 1 && die2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}
const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;

isSnakeEyes(die1, die2); */

//KODE UNTUK MENJUMLAH, JIKA BUKAN ANGKA HASIL FALSE
/* function add(x, y) {
  if (typeof x !== 0 || typeof y !== 0) {
    return false;
  }
  let sum = x + y;
  return sum;
} */

//KODE UNTUK MENSELECT INDEX TERAKHIR
/* function lastElement(x) {
  if (x.length === 0) {
    return null;
  } else {
    const lastIndex = x.length - 1;
    return x[lastIndex];
  }
} */

//KODE UNTUK MENGKAPITAL INDEX PERTAMA DALAM KATA
/* function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
} */

// KODE UNTUK MENJUMLAH ANGKA YG ADA DI ARRAY
/* function sumArray(x) {
  let sum = 0
  for (let i = 0; i < x.length; i++) {
      sum += x[i]
  }
  return sum
} */

//KODE UNTUK PRINT DAY MISAL returnDay(1) YANG KELUAR ADALAH MONDAY
/* const days = {
  1: 'Monday',
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday"
}

const returnDay = (number) => {
  if(number < 1 || number > 7) {
      return null;
  }
  return(days[number])
} */

// CONTOH SCOOP untuk mengakses inner harus ada kuncinya yaitu cnth inner() cryforhelp()
/* function bankRobbery() {
  const heroes = ["Spiderman", "Batman", "Superman", "Wolverine"];
  function cryForHelp() {
    function inner() {
      for (let hero of heroes) {
        console.log(`PLEASE HELP ME, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
} */

//FUNCTION EXPRESSION KODE YANG MEMPANGKATKAN ANGKA
/* const square = function (x) {
  let double = Math.pow(x, 2);
  return double;
}; */

//HIGH ORDER FUNCTION FUNCTION ATAS DAN BAWAH BISA BEKERJA SAMA
/* function konz(func) {
  func();
  func();
} */

/* function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
konz(rollDie);
 */
