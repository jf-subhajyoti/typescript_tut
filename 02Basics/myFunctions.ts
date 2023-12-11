function addTwo(num : number) : number {
    // gives an error
    // return "hello"; 
    return num + 2;
}

addTwo(5);

const isSignedUp = (name : string, email : string, isPaid : boolean = false) => {}

isSignedUp('subhajyoti', 'subh@gmail.com');

const heroes = ['thor', 'batman', 'hulk'];

heroes.map((hero) : string => {
    return(`Hero name is ${hero}`)
})

function consoleError (errMsg : string) : void {
    console.log(errMsg);
}

function handleError (errMsg : string) : never {
    throw new Error(errMsg);
}

export {};