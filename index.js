// Q.1
let name = "Conner Cuaycong";
let age = 17;
console.log(name);
console.log(age);

// Q.2
let str = "Hello, world!";
let number = 42;
let isActive = true;
let notDefined;
console.log(str);
console.log(number);
console.log(isActive);
console.log(notDefined);

// Q.3
let rollNumber = 15;
if (rollNumber > 10) {
    console.log("The RollNumber is greater than 10");
}

// Q.4
let isMember = true;
if (isMember) {
    console.log("Member discount applied.");
}

// Q.5
let startValue = 50;
if (startValue > 0) {
    console.log("The value is positive.");
} else if (startValue < 0) {
    console.log("The value is negative.");
} else {
    console.log("The value is zero.");
}

// Q.6
let a = 10;
let b = 20;
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// Q.7
let firstName = "Conner";
let lastName = "Cuaycong";
let age2 = 17;
console.log("Hello, " + firstName + " " + lastName + ", you are " + age + " years old.");

// Q.8
let num2 = 50;
if (num2 > 0 && num2 < 100) {
    console.log("The number is within range.");
}

// Q.9
let hasCar = true;
let hasLicense = true;
let hasInsurance = true;
if (hasCar && hasLicense && hasInsurance) {
    console.log("You can drive legally.");
} else {
    console.log("Check your driving eligibility.");
}

// Q.10
let num = 21;
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Q.11
let score = 85;
if (score >= 90) {
    console.log("Grade A.");
} else if (score >= 80 && score < 90) {
    console.log("Grade B.");
} else {
    console.log("Grade C.");
}
