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
