//1.1
let stringVar: string;
let numbVar: number;
let boolVar: boolean;
let arrVar: [];
let objVar: object;

//1.2
function getData(name: string, age: number)
{
    return `Name: ${name}, Age: ${age}`;
}
console.log(getData("John", 30));

//2.1
interface Person
{
    name: string,
    age: number,
    address?: string,
};

//2.2
function printPerson(person: Person)
{
    console.log(person)
};

const person: Person =
{
    name: "",
    age: 0,
}

printPerson(person)

//3.1
type Status = 'success' | 'error' | 'loading';

//3.2
function statusInfo(status: Status)
{
    if (status === "success")
    {
        console.log("Operation successful");
    }
    else if (status === "error")
    {
        console.log("An error occurred");
    }
    else if (status === "loading")
    {
        console.log("Loading...");
    }
}

statusInfo('success');
statusInfo('error');
statusInfo('loading');

//4.1
function identity<T>(value: T): T
{
    return value;
}

//4.2
console.log(identity<string>("string"));
console.log(identity<number>(5));
console.log(identity<boolean>(false));

//5.1
class Car
{
    model: string;
    year: number;

    constructor(model: string, year: number)
    {
        this.model = model;
        this.year = year;
    }

    getCarInfo()
    {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}

console.log(new Car("Batmobile", 1984));
