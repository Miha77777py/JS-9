// 1
console.log("1:\n");
const logItems = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1} - ${arr[i]}`);
    }
}

logItems(["Mango", "Poly", "Ajax"]);

// 2
console.log("\n2:\n");
const calculateEngravingPrice = (message, pricePerWord) => message.split(" ").length * pricePerWord;

console.log(calculateEngravingPrice("Hello world", 20));

// 3
console.log("\n3:\n");
const findLongestWord = string => {
    let longestWord = string[0];

    string.split(" ").forEach(el => {
        if (el.length > longestWord.length) {
            longestWord = el;
        }
    });

    return longestWord;
}

console.log(findLongestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit"));

// 4
console.log("\n4:\n");
const formatString = string => 
    string.length > 40 ? `${string.split("").splice(0, 40).join("")}...` : string;

console.log(formatString("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita perferendis modi earum tempore? Molestias quibusdam possimus voluptate dolore totam expedita eligendi voluptatibus, similique maxime illum earum fugiat odio eos vitae!"));

// 5
console.log("\n5:\n");
const checkForSpam = message => message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");

console.log(checkForSpam("SpaM saL"))

// 6
console.log("\n6:\n");
const numbers = [];

while (true) {
    let input = prompt("Введіть число: ");

    if (input != null) {
        numbers.push(Number(input));
    } else {
        break;
    }
}

console.log(numbers.reduce((acc, el) => acc + el, 0));

// 7
console.log("\n7:\n");
const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = (allLogins, login) => {
    if (isLoginValid(login)) {
        if (!isLoginUnique(allLogins, login)) {
            allLogins.push(login);
            console.log("Логін успішно доданий!");
        } else {
            console.log("Такий логін уже використовується!");
        }
    } else {
        console.log("Помилка! Логін повинен бути від 4 до 16 символів");
    }
}

const allLogins = ["Ivan", "David", "Nika"];
console.log("Тест з логіном Vika:");
addLogin(allLogins, "Vika");
console.log("\nТест з логіном NaN");
addLogin(allLogins, "NaN");
console.log("\nТест з логіном Noname238901283231331232425235234");
addLogin(allLogins, "Noname238901283231331232425235234");
console.log("\nТест з логіном Nika");
addLogin(allLogins, "Nika");