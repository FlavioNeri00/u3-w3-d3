console.log("hello world");
var myVar = "Flavio";
var myVar2;
myVar2 = 100;
myVar2 = 0.65;
console.log(myVar2.toFixed(1));
var sum = function (num1, num2) {
    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 + n2;
    }
    else {
        return "inserisci due numeri";
    }
};
console.log(sum("2", "20"));
var sumWithTs = function (num1, num2) {
    return num2 ? num1 + num2 : num1 + "niente secondo numero";
};
console.log(sumWithTs(10));
var mixedAddition = function (par1, par2) {
    if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
        return par1 + par2;
    }
    else {
        return "passa due numeri, grazie mille!  " + par1.toString();
    }
};
console.log(mixedAddition(1, 7.5));
var mixedParams = function (par1, par2) { };
var maybe;
if (maybe === true) {
    var myBoolean = maybe;
}
if (typeof maybe === "string") {
    var myNewString = maybe;
}
var myArray = [1];
myArray.push(0);
console.log(myArray);
var myArray2 = [];
myArray2.push("ciao");
myArray.push(1);
var myArray3 = [];
myArray3.push("uno");
myArray3.push("due");
myArray3.push("tre");
console.log("ei", myArray3.forEach(function (s) { return s === null || s === void 0 ? void 0 : s.length; }));
var myTuple = [0, ""];
var myTupleThree = [0, "", true];
var notVerySpecificTuple = [true, 50, "yo"];
console.log(myTupleThree[1].concat("yo"));
var addition = function (n1, n2) {
    return n1 + n2;
};
var empty = function () { };
var newFunc;
newFunc = addition;
var obj = {
    name: "Stefano",
    surname: "Miceli",
    hairColor: "brown",
    height: 185,
    age: 33
};
console.log(obj.hairColor.length);
var obj2 = {
    firtName: "mario",
    lastName: "rossi"
};
var obj3 = {
    name: "Riccardo",
    surname: "Gulin",
    hairColor: "brown",
    height: 185,
    age: 37,
    isRemote: true,
    country: "Italy"
};
var obj4 = {
    name: "Stefano",
    surname: "Casasola",
    hairColor: "light-brown",
    height: 185,
    age: 35,
    isRemote: true
};
var student1 = {
    name: "Umberto",
    eyes: true,
    height: 170,
    hasWebcam: true,
    batch: "FS0323B"
};
var student2 = {
    name: "Massimilino",
    eyes: true,
    height: 175,
    hasWebcam: true,
    batch: "FS0323B",
    numOfLimbs: 4
};
var student3 = {
    name: "Tina",
    eyes: false,
    height: 160,
    hasWebcam: false,
    batch: "FS0323B"
};
var arrOfStudents = [];
arrOfStudents.push(student1, student2, student3);
console.log(arrOfStudents);
arrOfStudents.forEach(function (s) { return s.hasWebcam; });
var U1 = {
    name: "Unit1",
    assignedTeacher: "Stefano Miceli",
    topic: "HTML, CSS, JS I, JS II, BW1"
};
var U2 = {
    name: "Unit2",
    assignedTeacher: "Stefano Miceli",
    topic: ["UX", "FrameWork", "SASS", "JS III", "BW2"]
};
var U3 = {
    name: "Unit2",
    assignedTeacher: "Stefano Miceli",
    topic: [
        { weeklyTopics: ["React", "State", "Props"] },
        { weeklyTopics: ["Hooks", "Lifecycle Methods", "Router", "Redux Into"] },
        { weeklyTopics: ["Redux ADV", "Redux Extra", "", "TS Intro", "TS React"] }
    ]
};
var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var inputForm = document.querySelector("form");
var greeting = document.querySelector(".greeting");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age);
    };
    return Person;
}());
inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake[ManufacturerMake["TESLA"] = 0] = "TESLA";
    ManufacturerMake[ManufacturerMake["AUDI"] = 1] = "AUDI";
    ManufacturerMake[ManufacturerMake["MERCEDES"] = 2] = "MERCEDES";
    ManufacturerMake[ManufacturerMake["VOLVO"] = 3] = "VOLVO";
    ManufacturerMake[ManufacturerMake["BMW"] = 4] = "BMW";
})(ManufacturerMake || (ManufacturerMake = {}));
var myCar = {
    year: 2021,
    make: ManufacturerMake.VOLVO
};
console.log(myCar.make);
