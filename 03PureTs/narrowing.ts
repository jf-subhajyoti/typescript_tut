function detectTypes(val: number | string) {
    if(typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string) {
    if(id === null) {
        console.log("PLease provide Id")
    }
    id.toLowerCase();
}

function printAll(str: string | string[] | null) {
    if(str !== null) {
        if(typeof str === "string") {
            console.log(str)
        } else {
            for(const s of str) {
                console.log(s)
            }
        }
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin
    }
}

function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toISOString());
    }
    else {
        x.toLowerCase();
    }
}

type Fish = {
    swim(): void
}

type Bird = {
    fly(): void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return ((pet as Fish).swim !== undefined)
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}


type Circle = {
    kind: 'circle',
    radius: number
}

type Square = {
    kind: 'square',
    side: number
}

type Rectangle = {
    kind: 'rectangle',
    lenght: number,
    width: number,
}

type Shape = Circle | Square | Rectangle;

// function getArea(shape: Shape) {
//     if(shape.kind === 'circle') {
//         return Math.PI * shape.radius ** 2;
//     }
//     return shape.side ** 2; // If we add Rectangle in the Shape type as well then this line will produce error
// }

function getArea2(shape: Shape) {
    switch(shape.kind) {
        case 'circle': 
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
        case 'rectangle':
            return shape.lenght * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}