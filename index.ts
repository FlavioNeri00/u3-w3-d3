console.log("hello world");

let myVar = "Flavio"

let myVar2: number

myVar2 = 100
myVar2 = 0.65

console.log(myVar2.toFixed(1))

const sum = (num1, num2) => {
    const n1 = parseInt(num1)
    const n2 = parseInt(num2)

    if(!isNaN(n1) && !isNaN(n2)){
        return n1 + n2
    } else {
        return "inserisci due numeri"
    }
}

console.log(sum("2", "20"));

const sumWithTs = (num1: number, num2?: number) => {
    return num2 ? num1 + num2 : num1 + "niente secondo numero"
}

console.log(sumWithTs( 10))

const mixedAddition = (par1: number | string, par2: number | string) => {
    
    if(typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)){
        return par1 + par2
    } else {
        return "passa due numeri, grazie mille!  " + par1.toString()
    }
}

console.log(mixedAddition(1, 7.5));

type StringOrNumber = string | number
const mixedParams = (par1: StringOrNumber, par2: StringOrNumber) =>{}


let maybe: unknown

if(maybe === true){
    const myBoolean = maybe
}

if(typeof maybe === "string"){
    const myNewString = maybe 
}

const myArray = [1]
myArray.push(0)
console.log(myArray);

const myArray2: StringOrNumber[] = []
myArray2.push("ciao")
myArray.push(1)

const myArray3: (string | undefined)[] = []

myArray3.push("uno")
myArray3.push("due")
myArray3.push("tre")

console.log("ei", myArray3.forEach(s => s?.length))

const myTuple: [number, string] = [0, ""]
const myTupleThree: [number, string, boolean] = [0, "", true]

const notVerySpecificTuple: (boolean | string | number)[] = [true, 50, "yo"] 
console.log(myTupleThree[1].concat("yo"));


const addition = (n1: number,n2: number) => {
    return n1 + n2;
    
}

const empty = () => {}

let newFunc: (x: number, y: number) => number

newFunc = addition

const obj = {
    name: "Stefano",
    surname: "Miceli",
    hairColor: "brown",
    height: 185,
    age: 33
}

console.log(obj.hairColor.length);

const obj2 = {
    firtName: "mario",
    lastName: "rossi"
}

type EpicodeTeacher = { 
    name: string,
    surname: string,
    hairColor: string,
    height: number,
    age: number
}

type RemoteTeacher = {
    isRemote: boolean,
    country?: string
}

const obj3: EpicodeTeacher & RemoteTeacher = {
    name: "Riccardo",
    surname: "Gulin",
    hairColor: "brown",
    height: 185,
    age: 37,
    isRemote: true,
    country: "Italy" 
}

const obj4: EpicodeTeacher & RemoteTeacher = {
    name: "Stefano",
    surname: "Casasola",
    hairColor: "light-brown",
    height: 185,
    age: 35,
    isRemote: true
}


interface HumanBeing {
    name: string,
    eyes: boolean,
    height: number,
    numOfLimbs?: number
}

interface EpicodeStudent extends HumanBeing {
    hasWebcam: boolean,
    batch: string,
}

const student1: EpicodeStudent = {
    name: "Umberto",
    eyes: true,
    height: 170,
    hasWebcam: true,
    batch: "FS0323B"
}


const student2: EpicodeStudent = {
    name: "Massimilino",
    eyes: true,
    height: 175,
    hasWebcam: true,
    batch: "FS0323B",
    numOfLimbs: 4
}

const student3: EpicodeStudent = {
    name: "Tina",
    eyes: false,
    height: 160,
    hasWebcam: false,
    batch: "FS0323B"
}

const arrOfStudents: EpicodeStudent[] = []

arrOfStudents.push(student1, student2, student3)
console.log(arrOfStudents);
arrOfStudents.forEach(s=> s.hasWebcam)

interface EpicodeUnit <T> {
    name: string;
    assignedTeacher: string;
    topic: T
}

const U1: EpicodeUnit <string> = {
    name: "Unit1",
    assignedTeacher: "Stefano Miceli",
    topic: "HTML, CSS, JS I, JS II, BW1"
}

const U2: EpicodeUnit <string[]> = {
    name: "Unit2",
    assignedTeacher: "Stefano Miceli",
    topic: ["UX", "FrameWork", "SASS", "JS III", "BW2"]
}

interface Topic {
    weeklyTopics: string[]
}
const U3: EpicodeUnit <Topic[]> = {
    name: "Unit2",
    assignedTeacher: "Stefano Miceli",
    topic: [
            {weeklyTopics: ["React", "State", "Props"]},
            {weeklyTopics: ["Hooks", "Lifecycle Methods", "Router", "Redux Into"]},
            {weeklyTopics: ["Redux ADV", "Redux Extra", "", "TS Intro", "TS React"]}]
}


interface PersonInterface {
    name: string;
    age: number

}

const inputName = document.querySelector("#name") as HTMLInputElement
const inputAge = document.querySelector("#age") as HTMLInputElement
const inputForm = document.querySelector("form")!
const greeting = document.querySelector(".greeting") as HTMLDivElement

class Person implements PersonInterface {
    
constructor( public name: string, public age:number){}
greet() {
    return `Hi, my name is ${this.name} and I am ${this.age}`
}
}

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const person = new Person(inputName.value, inputAge.valueAsNumber);

    greeting.innerText = person.greet()

    inputForm.reset();
}) 

enum ManufacturerMake {TESLA, AUDI, MERCEDES, VOLVO, BMW}

const myCar = {
    year: 2021,
    make: ManufacturerMake.VOLVO
}

console.log(myCar.make);
