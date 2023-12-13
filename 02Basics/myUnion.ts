let score : number | string = '22';
score = 22;

type User = {
    name: string,
    id: number
}

type Admin = {
    userName: string,
    id: number
}

let subh : User | Admin = {
    name: 'Subh',
    id: 12
}

subh = {
    userName: 'subh',
    id: 23
}

const data1 : number[] | string[] = [1, 2, 3]; // Either can be all numbers or all strings
const data2 : (number | string)[] = [1, '2'];

let seatAllotment : "aisle" | "middle" | "window" // Will now only these three value to be assigned

export {};