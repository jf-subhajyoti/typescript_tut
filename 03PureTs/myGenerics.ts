function logItem<T> (val: T) : T {
    return val;
}

logItem(1);
logItem("Subh");

interface Person {
    name: string,
    age: number,
    email: string,
}

logItem<Person>({name:'Subh', age: 25, email: 'subh@gmail.com'});

interface UserData<T, U> {
    name: T,
    age: U
}

const user1: UserData<string, number> = {
    name: 'Subhajyoti',
    age: 25
}