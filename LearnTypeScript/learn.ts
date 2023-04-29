export default function () {}

let message: string = 'Hello World';
let value: number = 1;

let nullableString: string | null = null;
nullableString = 'Hi';

let undefinedOrNumber: undefined | number;
undefinedOrNumber = 10;

let numberOrStringOrNull: number | string | null = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;

let isCompleted: boolean = true;
isCompleted = false;

let anyValue: any = null;
anyValue = undefined;
anyValue = 1;
anyValue = 'hello world';

function process(a: number, b: number, isDouble?: boolean) {
  const sum = a + b;
  return isDouble ? sum * 2 : sum;
}

const total = process(1, 2);
const doubledTotal = process(1, 2, true);

function hello(value: string, returnNull?: boolean) {
  if (returnNull) {
    return null;
  }
  return `Hello ${value}`;
}

const result = hello('World');
const nullResult = hello('World', true);

if (result !== null) {
  const replaced = result.replace('Hello', 'Bye');
}
const replaced = result?.replace('Hello', 'Bye');

interface Profile {
  id: number;
  username: string;
  displayName: string;
  photoURL?: string;
}

interface Account extends Profile {
  email: string;
  password: string;
}

const account: Account = {
  id: 1,
  username: 'johndoe',
  displayName: 'John Doe',
  email: 'john@email.com',
  password: '123123',
};

interface Relationship {
  from: Profile;
  to: Profile;
}

const relationship: Relationship = {
  from: {
    id: 1,
    username: 'velopert',
    displayName: 'Minjun Kim',
  },
  to: {
    id: 2,
    username: 'johndoe',
    displayName: 'John Doe',
  },
};

function printUsername(profile: Profile) {
  console.log(profile.username);
}

const profile: Profile = {
  id: 1,
  username: 'velopert',
  displayName: 'Minjun Kim',
};

const profileWithPhoto: Profile = {
  id: 1,
  username: 'velopert',
  displayName: 'Minjun Kim',
  photoURL: 'photo.png',
};

printUsername(profile);

interface Shape {
  getArea(): number;
  getPerimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(4);
const rectangle = new Rectangle(4, 6);

const area = circle.getArea();
const perimeter = rectangle.getPerimeter();

const numbers: number[] = [1, 2, 3, 4, 5];
const texts: string[] = ['hello', 'world'];

type Person = {
  name: string;
};

const person: Person = {
  name: 'John Doe',
};

type People = Person[];
const people: People = [{name: 'John Doe'}];

type Employee = Person & {
  job: string;
};

const employee: Employee = {
  name: 'John Doe',
  job: 'Programmer',
};

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
