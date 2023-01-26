"use strict";

// ***************************************HW 1

console.log('Hello World!')

// ***************************************HW 2

//*task 1:

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);
//the result is 120

//**task2:

const secondsInAminute = 60;
const minutesInAnHour = secondsInAminute;
const hoursInAday = 24;
const daysInAyear = 365;
let myAge = 33;

let myAgeInSeconds = secondsInAminute * minutesInAnHour * hoursInAday * daysInAyear * myAge;

console.log(myAgeInSeconds);
//the result is 1040688000 seconds

//***task 3:

//***task 3 (number to a string):
let count = 42;

let countToStringFirst = String(count);

console.log(countToStringFirst);
//the result  is '42';

let countToStringSecond = "" + count;

console.log(countToStringSecond);
//the result  is '42';

//***task 3 (string to a number):
let userName = "42";

let userNameToNumberFirst = +userName;

console.log(userNameToNumberFirst);
//the result is 42;

let userNameToNumberSecond = Number(userName);

console.log(userNameToNumberSecond);
//the result is 42;

//****task 4:
let a = 1;
let b = 2;
let c = "белых медведей";

let phrase = "" + a + b + " " + c;

console.log(phrase);
//the result is: 12 белых медведей

//*****task 5:

let access = "доступ";
let marine = "морпех";
let frost = "наледь";
let reproach = "попрек";
let chopped = "рубило";

let lengthWords = (access + marine + frost + reproach + chopped).length;

console.log(lengthWords);
//the result is 30;

//task ******6:
let someString = "Hello";
let someNum = 5;
let someObject = true;

console.log("Variable: someString have type: " + typeof someString);
//the result is: Variable: someString have type: string
console.log("Variable someNum have type: " + typeof someNum);
//the result is: Variable someNum have type: number
console.log("Variable someObject have type: " + typeof someObject);
//the result is: Variable someObject have type: boolean

//task *******7:
let userName = prompt ("Please enter your name:");

console.log ("The user name is: " + userName);
//the result in console is: The user name is: typed name

let userAge = prompt ("Please enter your age:");

console.log ("The user age is: " + userAge);
//the result in console is: The user age is: typed age

//task 1 advanced:
let a = 4;
let b = 3;

a = a * b; // 4 * 3 = 12; a = 12;
b = a / b; // 12 / 3 = 4; b = 4;
a = a / b; // 12 / 4 = 3, a = 3;

console.log(a); // the result is 3

console.log(b); // the result is 4

//task 2 advanced:
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);
//the result is: беги!



// ***************************************HW 3

//task 1
let variableTrue = true;
let variableFalse = false;
let variableNumber = 17;
let variableUndefined = undefined;
let variableNull = null;

console.log(typeof variableTrue); // boolean
console.log(typeof variableFalse); // boolean
console.log(typeof variableNumber); // number
console.log(typeof variableUndefined); //undefined
console.log(typeof variableNull); // object

//task 2  method 1:
let height = 15;
let width = 20;

let compare = (height > width) ? height : width;
console.log (compare); // 20  
//(тернарный оператор возвращает значение выражения1, если условие верно, и значение выражения2 в противном случае, так как height не больше width, ответ пришел равный width)

// task 3

for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);

console.log (shouldGoToWork);

// task 5:

let num = +prompt ("Please type in a number");

if (num % 3 === 0 && num % 5 === 0){
    alert ("FizBuz");
} else if (num % 3 === 0){
    alert("Buz");
} else if (num % 5 === 0){
    alert("Fiz");
} else {
    prompt ("Please, type in another number");
}

// task 6

let userAge = +prompt ("Укажите, пожалуйста, свой возраст");

if (userAge > 18) {
    console.log ("Попей пивка");
} else if (userAge >= 16 && userAge <= 18) {
    console.log ("Можешь выкурить сигаретку, только маме не говори");
} else if (userAge < 16) {
    console.log ("Пей колу");
} else {
    console.log ("Повторите, пожалуйста, ввод цифр еще раз, что-то пошло не так");
}

// task 7

let userChoice = prompt ("В какую сторону света вы хотите отправиться?", "север, юг, запад, восток");

switch (userChoice) {
    case "север":
        console.log ("на север пойдешь много денег найдешь");
        break;
    case "юг":
        console.log ("на юг пойдешь счастье найдешь");
        break;
    case "запад":
        console.log ("на запад пойдешь верного друга найдешь");
        break;
    case "восток":
        console.log ("на восток пойдешь разработчиком станешь");
        break;
    default:
    console.log ("пожалуйста, попробуйте еще раз");
}

//task 1 advanced

let someName = prompt ("Пожалуйста, впишите ваше имя и фамилию");

let userName = "пОлИнА";
let userNameLow = userName.toLowerCase();
let nameFirstLetter = userNameLow[0];
let capitalName = nameFirstLetter.toUpperCase();
let restOfName = userNameLow.slice(1);
let realName = capitalName + restOfName;

let userSurname = "нАбЕрЕжНаЯ";
let userSurnameLow = userSurname.toLowerCase();
let surnameFirstLetter = userSurnameLow[0];
let capitalSurname = surnameFirstLetter.toUpperCase();
let restOfSurname = userSurnameLow.slice(1);
let realSurname = capitalSurname + restOfSurname;

let fullName = realName + " " + realSurname;

if (someName === "пОлИнА нАбЕрЕжНаЯ"){
    alert ("Привет, " + fullName);
} else{
    prompt ("Пожалуйста, впишите ваше имя и фамилию еще раз");
    alert ("Привет, " + fullName);
}


//advanced 2

let userAnswer1 = +prompt ("Пожалуйста, введите любое число");
let userAnswer2 = +prompt (`Введите число, которое вы хотите отнять от ${userAnswer1}`);
let resultOne = userAnswer1 - userAnswer2;

let userAnswer3 = +prompt (`Введите число,которое вы хотите прибавить к ${resultOne}`);
let resultTwo = resultOne + userAnswer3;

let userAnswer4 = +prompt (`Введите число, на которое нужно умножить ${resultTwo}`);
let multipl = userAnswer4 * resultTwo;

let userAnswer5 = +prompt (`Введите число, на которое нужно разделить ${multipl}`);
let result = multipl / userAnswer5;


alert (`(((${userAnswer1} - ${userAnswer2}) + ${userAnswer3}) * ${userAnswer4}) / ${userAnswer5} = ${result}`);


//task adv 3 
let ledder = "#";
while (ledder.length <= 6){
    console.log(ledder);
    ledder = ledder + "#";
}





// ***************************************HW 4

// task 1

// Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 
// Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)

function getSum(n){
    let sum = 0;
   for (let i = 1; i <=n; i++){
    sum += i;
   }
   return sum;
}
console.log (getSum (100));

// task 2
//Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент 
// и верните результат переплаты по кредиту:
//процентная ставка в год — 17%,
// количество лет — 5.

function creditSum(n){
    let interestRate = 0.17;
    let years = 5;
    let overpayment = n * years * interestRate;
    return overpayment;
}
console.log (creditSum (10000));

// task 3 

// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// + строку  значение от   значение по
// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

function trimString (anyString, valueFrom, valueTo) {
    let trimmedString = ""; 
    let anyStringLength = anyString.length;

    
    if (valueFrom >= valueTo) {
        alert("(1) Invalid agrument, please, type in first number smaller than second one");
        return;
    } else if (valueTo > anyStringLength) {
        alert("(2) Invalid argument, please, type in second number smallet than word length")
        return;
    } 

    for (let i = valueFrom; i <= valueTo; i++) {
        trimmedString += anyString[i];
    }

    return trimmedString;
}

let getAnyString = prompt ("please, type in any word", "");
let getValueFrom = prompt ("please, type in any number less than word length", "");
let getValueTo = prompt (`Please, type in any number, bigger than ${getValueFrom} `);


let result = trimString (getAnyString, getValueFrom, getValueTo);
alert(result);


// or:
// function trimString(anyString, valueFrom, valueTo) {
//     let result = anyString.slice(valueFrom, valueTo);
//     return result;
// }

// console.log(trimString("Morning", 1, 4)) // orn

// task 4

//Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// Для 2021 это будет 5.

function getSumNumbers(randomNum){
    let randomStringNum = String(randomNum);
    let sum = 0;
   for (let i = 0; i < randomStringNum.length; i++){
   sum += Number(randomStringNum[i]);
}
return sum;
}
console.log (getSumNumbers (2021)); // 5


// task 5

// Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, 
// найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.


function getSum (a,b) {
    let sum = 0;
     for (let i = (a <= b) ? a : b;  // допустим 1 <= 2, ok, тогда 1, т.е. i = 1
             i <= ( a <= b ? b : a); //  i <=  (опять 1 <= 2 да, тогда 2,  1 < 2  - да, тогда приращиваем ниже i ++
             i ++) {                 // i++ т.е. 1+1 = 2
             sum += i;                // sum = 0 + 1 = 1 , цикл повторяется 
            }
            return sum;
         }
         let firstNumber = +prompt ("please, type in a number");
         let secondNumber = +prompt ("please, type in another number and you will get a sum of them or one of them, if both are equal");
         alert (getSum(firstNumber, secondNumber));


// let result = getSum (firstNumber, secondNumber);

// function getSum (a,b) {
//     if (a <= b){
//         let sum1 = 0;
//         for (let i = a; i <= b; i++){     
//             sum1 = sum1 + i;
//         }
//         return alert(sum1);

//     } else if (a >= b) {
//         let sum2 = 0;
//         for (let i = b; i <= a; i++) {
//             sum2 = sum2 + i;
//         }
//         return alert(sum2);

//     } else if (a === b) {
//         return console.log (a);
//     } else {
//         return alert("please, type in a number")
//     }
// }

// let firstNumber = +prompt ("please, type in a number");
// let secondNumber = +prompt ("please, type in another number and you will get a sum of them or one of them, if both are equal");

// let result = getSum (firstNumber, secondNumber);



// task 6
// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя

// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

function fooBoo(booleanValue, functionFoo, functionBoo) {
    booleanValue ? functionFoo() : functionBoo();
    // another method:
    // if (booleanValue) {
    //     functionFoo();
    // } else {
    //     functionBoo();
    // }
}

function foo() {
  console.log(foo.name);
}

function boo() {
    console.log(boo.name);
}

fooBoo(true, foo, boo);


// adv_task-1
//Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. 
//Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины, 
//и **false** в любом другом случае.

function isTriangle  (a,b,c){
    if (Number.isInteger(a, b, c) === true && (a + b > c) && (a + c > b) && (b + c > a)){     
      return true;
    } else {
      return false;
    }
  }
  // console.log (isTriangle(3,4,100)); //false
  // console.log (isTriangle (3,3,3)); // true
  console.log (isTriangle (3.5,3.5,3.5)); false
  
  // проверка на целое число: число % 1 === 0  или   Number.isInteger()   

  // adv_task-2
+ Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. 
Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.

+ Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, 
но для размера 3 x 1 вы должны сделать два надлома.

+ Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). 
Ввод всегда будет неотрицательным целым числом.

// adv_task-3

const taxRate = 0.23;

function totalCost (balance, phonePrice, accessoryPrice) {
    let phoneAccessory = phonePrice + accessoryPrice;
    let totalPhonePrice = ((phoneAccessory) + (phoneAccessory * taxRate)).toFixed(2);
    return totalPhonePrice;
    if (balance > totalPhonePrice){                                   // эта часть не срабатывает, где и что нужно дописать, чтобы появлялись алерты???  
         let i = 0;
         for (let i = totalPhonePrice; i <= balance; i++){
             balance = balance - i;
             i++
         } 
         return (alert (`You can buy ${i} phones`));
        
    } else {
        return (alert ("You do not have enough funds to buy a phone"));        // эта часть не срабатывает, где и что нужно дописать, чтобы появлялись алерты???  
    }
}
let balance = +prompt("Please, enter your bank account balance");
const phonePrice = +prompt ("Please, enter the price of the phone you want to buy");
const accessoryPrice = +prompt ("Please, enter the price of the accessory you want to buy");
alert ("Your purchase amount is: " + totalCost(balance, phonePrice, accessoryPrice));    

                                           // как и что мне внизу нужно ещё прописать, чтобы эти мои алерты появлялись, что вы можете купить столько-то телефонов???
                                           




//// ***************************************HW 5

//Task 1 
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 
let user = {
    name: "Jack",
    age: 50
};
delete user.name;
delete user.age;
console.log(user); // {}

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

let userCar = {
    color: "black",
    year: 2019,
}
console.log("color" in userCar); // true


// Дан обьект

const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}

// C помощью цикла **for in** вывести в консоль сначала все ключи обьекта:
for (const key in student){
    console.log(key); // name, age, isHappy
}

 // C помощью цикла **for in** вывести в консоль значения ключей обьекта:
for (const key in student){
    console.log(student[key]); // John, 19, true
}


// Дан обьект
// Вывести в консоль слово красный и синий

const colors = {
    "ru pum pu ru rum": {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};


console.log(colors["ru pum pu ru rum"]["red"]); // красный
console.log(colors["ru pum pu ru rum"]["blue"]); // синий


// Дан обьект:

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    ilya: 664,
    alexandra: 199
}
// задание: Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salariesSum = 0;

for (let key in salaries){ //andrey, sveta, anton, ilya, alexandra
salariesSum += salaries[key]; // 500, 413, 987, 664, 199   
}
// можно вот так:
// let count = 0;
// for (let properties in salaries){
//     count = count + 1;
// }
// или так:
let count = Object.keys(salaries).length

let averageSalary = salariesSum / count;
console.log(averageSalary);   

// or, another way to solve it:

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     ilya: 664,
//     alexandra: 199,
// }

// let numberOfEmployees = 0;
// let salariesSum=0;

// for (let key in salaries) {
//   numberOfEmployees++;
//   salariesSum += salaries[key];
// }

// let averageSalary = salariesSum / numberOfEmployees;
// alert(averageSalary);

//Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
//Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.


let userInfo = {};
userInfo.login = prompt ("please, enter your login", "");
userInfo.password = prompt ("please, enter your password", "");

let confirmedLogin = prompt("Please confirm login", "");
let confirmedPassword = prompt("Please confirm password", "");
if (userInfo.login === confirmedLogin && userInfo.password === confirmedPassword){
    alert ("You are welcome");
} else {
    alert("Please, try again");
}




// document.getElementById("check").onclick = function(){
//     let login = document.getElementById("login").value;
//     let password = document.getElementById("password").value;

//     if (login ===  "Kate" && password === "abc") {
//         alert("Welcome");
//     } else {
//         alert ("Incorrect login or password");
//     }
// }



//Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
//Жаль что нам присылают результат матча в формате '2:5', 
//ведь нам надо это вывести в консоль словами. 
//Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 


let matchScore = prompt("Please, enter the score", "0:0");
const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
}
function transformScore(matchScore){
    if (typeof matchScore === "string"){
        let firstNumber = matchScore.charAt(0);
        let secondNumber = matchScore.charAt(2);
        alert("The score is: " + numbers[firstNumber] + ":" + numbers[secondNumber]);
    }
}
transformScore(matchScore);

// task_adv-2
// Даны два одинаковых обьекта. Сравните их так чтобы они были равны


let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2));

// task_adv-3

// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. 
// Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

const animals = {
    cat: {
       name: 'Енчик',
       age: 3,
    },
    dog: {
       name: 'Орео',
       age: 2,
    }
 }
 
 // console.log(animals.cat); // {name: 'Енчик', age: 3}
 // console.log(animals.cat.name);// Енчик
 
 console.log(animals.bird?.name);// undefined
 

// ***************************************HW 6

// task 1

// Дан массив
// Выведите в консоль его длину.

const colors = ['red', 'green', 'blue']

console.log (colors.length); // 3

// task 2

// Дан массив:
// Выведите в консоль его последний элемент вне зависимости от его длинны.


const animals = ['monkey', 'dog', 'cat'];

console.log (animals[animals.length - 1]); // cat

// or:
// let lastElement = animals[animals.length - 1];
// console.log(lastElement);

// task 3

// Дан массив:
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами.

    // Способ 1 
    const numbers = [5, 43, 63, 23, 90];
    const splicedNumbers = numbers.splice(numbers.length);
    console.log(splicedNumbers); // length: 0  Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
    

    // Способ 2
    const newNumbers = [5, 43, 63, 23, 90];
    newNumbers.splice(0);
    console.log(newNumbers); // length: 0
    
    //Методом slice:
    // const slicedNumbers = numbers.slice(numbers.length);
    // console.log(slicedNumbers); // length: 0  Метод slice() возвращает новый массив, содержащий копию части исходного массива
     // или запись короче:
    // console.log(numbers.slice(numbers.length)); // length: 0
    
    
// task 4

// Дан массив:

const students = ['Polina', 'Dasha', 'Masha'];
// Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`
students.pop(); // ['Polina', 'Dasha']
students.push(`Borya`); 
console.log(students); //  ['Polina', 'Dasha', 'Borya']


// Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
students.shift(); // 'Polina' (shift удаляет из массива первый элемент и возвращает его) 
students.unshift(`Andrey`);
console.log(students); // ['Andrey', 'Dasha', 'Borya']

// task 5

// Дан массив:
// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++){
    console.log(cats[i]);
} 
// Gachito
// Tom
// Batman


for (let cat of cats){
    console.log(cat);
}
// Gachito
// Tom
// Batman


// task 6

// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа **`8`**


const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const numbers = evenNumbers.concat(oddNumbers); // [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
console.log(numbers.indexOf(8)); // 3

// task 7
// Дан массив:
// Наш бинарный массив неполный, в нем явно не хватает единиц. Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0];

const binaryString = binary.join('1'); 

console.log(binaryString); // '0101010'

// task adv 1
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.


let word = prompt ("Please, enter any word and find out if it's a palindrome", "");
word = word.toLowerCase();
function isPalindrom(){
    
    let array = word.split('');  // разобъет вписанное слово на символы в массиве
    let reversedArray = array.reverse(); // перевернет символы с конца в начало (был допустим ['c', 'a', 't'] станет ['t', 'a', 'c'])
    let joinedReversedArray = reversedArray.join(''); // объединит массив в строку tac
    alert(`The flip word is: ${joinedReversedArray}`);   // выведет на экран строку tac (если пользователь ввел изначально cat)
    
    joinedReversedArray === word ? alert("The word you entered is a palindrome") : alert("You entered the usual word");
}
isPalindrom();

// function checkPalindrom() {                              // пробовала решить с циклом - не получается, доходит до цикла и повторяет снова split, join и т.д.
//     for(let i = 0; i < word.length; i++){
//         if(isPalindrom(word[i])){
//             alert("The word you entered is a palindrome");
//         }
//     }
//     alert("You entered the usual word")
// }
// checkPalindrom();


// task adv 2

// Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
// console.log(matrix.length); // 4 
// console.log(matrix[0].length); // 5
// console.log(matrix[1].length); // 5
// console.log(matrix[2].length); //4
// console.log(matrix[3].length); // 4

function averageSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
console.log (averageSum(matrix[0])); // 55.2
console.log (averageSum(matrix[1])); // 67.2
console.log (averageSum(matrix[2])); // 178.5
console.log (averageSum(matrix[3])); // 24789.75

console.log ((averageSum(matrix[0]) + averageSum(matrix[1]) + averageSum(matrix[2]) + averageSum(matrix[3])) / matrix.length); // 6272.6625



// task adv 3

// Дан массив:
//Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.


const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
const positiveNumbers = [];
const negativeNumbers = [];
for (let i = 0; i < mixedNumbers.length; i++) {
 if (mixedNumbers[i] >= 0) {
     positiveNumbers.unshift(mixedNumbers[i]);
 } else {
     negativeNumbers.unshift(mixedNumbers[i]);
 }
}
console.log(positiveNumbers.reverse()); // [24, 43, 0, 412, 4]
console.log(negativeNumbers.reverse()); // [-14, -89, -1]


// task adv 4

// Создать массив длинной не менее 5, из динамически созданных случайных чисел.
// Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. 
// В конце вывести оба массива в консоль.

let randomArray = [];
for(let i = 0; i < 5; i++){ 
    randomArray.push(Math.floor(Math.random()*100));
}
const cubedRandomNumbers = randomArray.map((number) => number**3);
console.log(randomArray); 
console.log(cubedRandomNumbers);


// ***************************************HW 7

//task 1

// Выведи все элементы массива в консоль с помощью метода **`forEach`**
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

// arrow function, example 1
 const fibonacciSortedOut = (num) => {
     console.log(num);
 }
 fibonacci.forEach(fibonacciSortedOut);

 // or also arrow function, example 2
  fibonacci.forEach((num) => {   
    console.log(num)                        
  })

//function declaration
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
function fibonacciSorted(number){
   console.log(number);
}
const fibonacciSortedOut = fibonacci.forEach(fibonacciSorted);
console.log(fibonacciSortedOut);


// Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
//в котором каждый элемент массива будет содержать строку вида:
// ['member 1: Darya', 'member 2: Masha', ... etc]
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

// const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

 //arrow function 

 const members = users.map((name, index) => {
    return `member ${index + 1}: ` + name;
   });
   console.log(members); // ['member 1: Darya', 'member 2: Masha', 'member 3: Denis', 'member 4: Vitaliy', 'member 5: Polina', 'member 6: Anton']
 
 // function declaration!
  const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
 
  function usersToMembers(name, index){
   return `member ${index + 1}: ` + name;
  }
  const members = users.map(usersToMembers);
  
  console.log(members); // ['member 1: Darya', 'member 2: Masha', 'member 3: Denis', 'member 4: Vitaliy', 'member 5: Polina', 'member 6: Anton']
 
  // function expression
 
   const clonedUsers = users.map(function(name, index){
       return `member ${index + 1}: ` + name;
   });
   console.log(clonedUsers); // ['member 1: Darya', 'member 2: Masha', 'member 3: Denis', 'member 4: Vitaliy', 'member 5: Polina', 'member 6: Anton']
  
   
   // С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

// arrow function
const numbers = [7, -4, 32, -90, 54, 32, -21];
const positiveNumbers = numbers.filter((number) => number >= 0);
console.log(positiveNumbers); // [7, 32, 54, 32]


//function declaration

 const numbers = [7, -4, 32, -90, 54, 32, -21];
 function positiveNumbers(number){
     return number >= 0;
 }
 const positiveNumbersArray = numbers.filter(positiveNumbers)
 console.log(positiveNumbersArray); // [7, 32, 54, 32]


 // function expression

// const numbers = [7, -4, 32, -90, 54, 32, -21];
const filteredNumbers = numbers.filter(function(number){
    return number >= 0;
});
console.log(filteredNumbers); // [7, 32, 54, 32]

// Используя метод **`reduce`** получите сумму всех чисел массива.
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`


const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// arrow function
const sum = fibonacci.reduce((accum, value) => {
    return accum + value
},0);
console.log(sum); // 2583

// function declaration - 
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
 function fibonacciSum (accum, value){
    return accum + value;
  }; 
const fibonacciArraySum = fibonacci.reduce(fibonacciSum);
console.log(fibonacciArraySum); // 2583


// function expression
const fibonacciSum = fibonacci.reduce(function(accum, value){
    return accum + value;
});
console.log(fibonacciSum); // 2583

//Используя метод **`find`** найдите в массиве первое четное число.
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// arrow function
const evenNumbers = numbers.find((number) => number % 2 === 0);
console.log(evenNumbers); // 24

// function declaration 

function evenNumbers(number){
    return number % 2 === 0;
};
const firstEvenNumber = numbers.find(evenNumbers);
console.log(firstEvenNumber); // 24

// function expression
const evenNumbers = numbers.find(function(number){
    return number % 2 === 0;
});
console.log(evenNumbers); // 24

// Написать функцию конструктор **Student**
// В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
//  На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы. 

// Создать массив **students** и поместить в него студентов.
// ??? Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

//**rate** имеет 4 категории A B C D
// **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// **D** - плохой рейтинг и мы не можем дать кредит

function commonSum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        let student = array[i];
        if (student.rate === 'A'){
            sum += student.salary * 12;
        } else if (student.rate === 'B'){
            sum += student.salary * 9;
        } else if (student.rate === 'C'){
            sum += student.salary * 6;
        }
    }
    return sum;
}

function Student(salary, rate, name){
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.creditSum = function(){
        if(rate === 'A'){
            return "Great, we can give you a loan " + salary * 12 + " $";
        } else if(rate === 'B'){
            return "Good, we can give you a loan " + salary * 9 + " $";
        } else if (rate === 'C'){
            return "Not bad, we can give you a loan " + salary * 6 + " $";
        } else {
            console.log("Sorry, you do not have enough funds to get a loan");
        }
    }
}
let studentFirst = new Student(55, 'A', 'John');
let studentSecond = new Student(50, 'A', 'Pete');
let studentThird = new Student(40, 'B', 'Hanna');
let studentFourth = new Student(30, 'C', 'Maria');
let studentFifths = new Student(20, 'D', 'Rita');

console.log(studentFirst.creditSum());
console.log(studentSecond.creditSum());
console.log(studentThird.creditSum());
console.log(studentFourth.creditSum());
console.log(studentFifths.creditSum());

let students = [];
students.push(studentFifths);
students.push(studentFourth);
students.push(studentThird);
students.push(studentSecond);
students.push(studentFirst);

console.log(students);

console.log (commonSum(students));

// Тролли атакуют наш раздел с комментариями!!!
// Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// Примечание: для этой задачи **`y`** не считается гласной.
 

//solution 1:
let cleanedComment = comment.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '');
alert(cleanedComment);


// solution 2
 let comment = prompt ("Please, left your comment", "");
 function cleanedComment(incomeString){
     let outcomeString = "";
     let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < incomeString.length; i++){
        if (!vowels.includes(incomeString[i])){
            //here I should delete element [i] from incomeString
            outcomeString += incomeString[i];
        };
    };
    return outcomeString;
};
 
 alert (cleanedComment(comment));

//solution 3
//  let comment = prompt ("Please, left your comment", "");
//  function cleanedComment(incomeString) {             
//     let outcomeString = "";                            
//     for (let i = 0; i < incomeString.length; i++)  {           
//       if (incomeString[i] != "a" && incomeString[i] != "e" && incomeString[i] != "i" && incomeString[i] != "o" && incomeString[i] != "u"){           
//        outcomeString += incomeString[i];         
//       };   
//     };   
//     return outcomeString;   
//   };  
//   console.log(cleanedComment(comment)); 

// Task 3  Нет истории, нет теории

// + В приведенных ниже примерах показано, как написать функцию:
// ```javascript
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// ```

// > Параметр - это строка, которая включает только буквы от a..z и A..Z.


// Solution:

function accum(str) {                           //abcd
    str = str.toUpperCase();                    //ABCD
    let result = '';
    for (let i = 0; i < str.length; i++) {        // проходимся по строке
        result += str[i];                     // 1) A [0] 2) B[1] 3) C[2] 4) и тд
        for (let j = 0; j < i; j++) {            // сколько раз добавить букву в нижнем регистре
           result += str[i].toLowerCase();   // 1) 0<0? нет, оставляем A 2)0<1? да значит B превращаем в b и добавляем, щаг 1<1? нет- идем дальше 
        }                                     // 3) 0<2? да значит берем C и делаем из нее с, шаг, 1 < 2? да, опять делаем с (у нас уже Ccc), шаг, 2<2? нет, пошли дашльше 4) и тд
        
        if (i !== str.length - 1) {          // чтобы в конце не добавлялся дефис еще раз
           result += '-';                    // 1) [0] не равно длине строки (4-1) то добавляем к А дефис (А-)  2)[1]<3 да, значит ставим дефис 3) [2]<3 да, даем дефис 4) и тд
        }
    }
    return result;                            // 1) A- 2) Bb- 3) Ссс- 4) и тд
    }
    
    console.log(accum("abcd"));
    console.log(accum("RqaEzty"));
    console.log(accum("cwAt"));

    // В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
// Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.//

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Method 1
const stringFirst = "1 2 3 4 5";
const stringFirstToArray = stringFirst.split(" ");
console.log(stringFirstToArray); // ['1', '2', '3', '4', '5']
let highAndLowFirst = (`${Math.max(...stringFirstToArray)} ${Math.min(...stringFirstToArray)}`);
console.log(highAndLowFirst); // 5 1

Method 2
const stringSecond = "1 2 -3 4 5";
const stringSecondToArray = stringSecond.split(" ");
console.log(stringSecondToArray); // ['1', '2', '-3', '4', '5']
const max = stringSecondToArray.reduce((a, b) => Math.max(a, b));
// console.log(max); //5
const min = stringSecondToArray.reduce((a, b) => Math.min(a, b));
// console.log(min); // -3
let highAndLowSecond = (`${max} ${min}`);
console.log(highAndLowSecond); // 5 -3

// Method 3

const stringThird = "1 9 3 4 -5";
const stringThirdToArray = stringThird.split(" ");
console.log(stringThirdToArray); // ['1', '9', '3', '4', '-5']
let maxInThirdArray = Math.max.apply(null, stringThirdToArray); // Это эквивалентно Math.max(numbers[0], ...)
console.log(maxInThirdArray); // 9
let minInThirdArray = Math.min.apply(null, stringThirdToArray);
console.log(minInThirdArray);
let highAndLowThird = (`${maxInThirdArray}  ${minInThirdArray}`);
console.log(highAndLowThird); // 9 -5

// //Method 4 (with a For loop)
const someString = "3 -1 5";
const someStringToArray = someString.split(" ");
console.log(someStringToArray); //  ['3', '-1', '5']
// max
let max = someStringToArray[0];
for (let i = 1; i < someStringToArray.length; i++) {
  if (someStringToArray[i] > max) {
    max = someStringToArray[i];
  }
}
// console.log(max); //5

// min
let min = someStringToArray[0];
for (let j = 1; j < someStringToArray.length; j++) {
  if (someStringToArray[j] < min) {
    min = someStringToArray[j];
  }
}
// console.log(min); // -1
console.log(`${max} ${min}`) //5 -1


// Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
//Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. 
//Регистр букв мы игнорируем.

    // isIsogram("Dermatoglyphics") == true
    // isIsogram("aba") == false
    // isIsogram("moOse") == false // -- ignore letter case


    function isIsogram(someString) {
        let someStringLow = someString.toLowerCase();
      for (let i = 0; i < someStringLow.length; i++) {
        if (someStringLow.indexOf(someStringLow[i]) !== someStringLow.lastIndexOf(someStringLow[i])) {
          return false
        }
      }
      return true
    }
    
    console.log(isIsogram("Des")); // true
    console.log(isIsogram("aba")); // false
    console.log(isIsogram("moOse")); // false
    console.log(isIsogram("moOsOjkoOOkffsOOoooe")); // false

    //Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. Поместите результат в переменную **`total1`**

//Затем замените все числа `7` на число `1` и назовите это число **`total2`**

// После верните разницу между суммой цифр **`total1`** и **`total2`**

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
 
function total(someString){
    let newString = "";
    for(let i = 0; i < someString.length; i++){
        newString += someString[i].charCodeAt();   
    }
    return newString;
}


 function sum(array) {
     let sum = 0
     for(let i = 0; i < array.length; i++){
         sum += array[i];
     }
return sum;
 }


let total1 = total("ABC");
console.log(total1); // 656667
console.log(typeof(total1)); // string


let total1Array = total1.split("");
console.log(total1Array); // ['6', '5', '6', '6', '6', '7']

let total2 = total1Array.map(element => element === "7" ? "1" : element);

console.log(total2); // ['6', '5', '6', '6', '6', '1']


// total1Array  ['6', '5', '6', '6', '6', '7']
//total2 ['6', '5', '6', '6', '6', '1']

console.log(sum(total1Array) - sum(total2)); // 6

// Вариант 2 (сумму можно посчитать еще так):

// let total1Array = ['6', '5', '6', '6', '6', '7'];

// let total1NumArray = total1Array.map(string => +string);
  
// console.log(total1NumArray);  // [6, 5, 6, 6, 6, 7]


// const sumtotal1 = total1NumArray.reduce((accum, value) =>{
//     return accum + value
// },0)
// console.log (sumtotal1); // 36


// let total2 = ['6', '5', '6', '6', '6', '1'];
// let total2NumArray = total2.map(string => +string);
// console.log(total2NumArray); // [6, 5, 6, 6, 6, 1]

// const sumtotal2 = total2NumArray.reduce((accum, value) =>{
//     return accum + value
// }, 0)
// console.log(sumtotal2); // 30

// let result = (sumtotal1 - sumtotal2);
// console.log (result); // 6




// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен 
// **`(`**, если этот символ появляется только один раз в исходной строке, или **`)`**, если этот символ встречается более одного раза в исходной строке. 
// Игнорируйте использование заглавных букв при определении дубликата символа.


    // "din" => "((("
    // "recede" => "()()()"
    // "Success" => ")())())"
    // "(( @" => "))(("

//программа
//приводим строку в нижний регистр, 
//создаем переменную с результатом  ""
// проходимся по стоке ища повторяющиеся буквы
//если символ в строке повторяется 1 раз тогда заменяем ее на  (
//если символ в строке повторяется больше 1 раза, то заменяем ее на )
    

function transform(str) {
    str = str.toLowerCase();
    let result = '';

    for(let i = 0; i < str.length; i++){

        if  (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            result += ")";
          } else {
            result += "("
          }
          
    }
    return result;
  }
  
console.log(transform("din")); // (((
console.log(transform("recede")); // ()()()
console.log(transform("Success")); //)())()) 
console.log(transform("(( @")); // ))((
    
    
    
