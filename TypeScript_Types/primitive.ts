// Primitive data Types in Typescript

// string
const myName: string = "Jude Test";
console.log(myName);

// number
const numberOfWheels: number = 4;
console.log(numberOfWheels);

// boolean
const isStudent: boolean = false;
console.log(isStudent);

// void
function noop (): void {
  return;
}
console.log(noop());

// undefined and null
function doSomething (x: string | null): string | null {
  if (x === null) {
    // do nothing
  } else {
    return `Hello, ${x.toUpperCase()}`;
  }
}
console.log(doSomething("Jude"));

