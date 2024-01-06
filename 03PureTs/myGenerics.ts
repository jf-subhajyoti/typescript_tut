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

function getSearchProducts<T>(products: T[]) : T {
    return products[0];
}

const getMoreSearchProducts = <T> (products: T[]) : T => {
    return products[0];
}

interface Database {
    connection: string,
    password: string,
    username: string
}

function getProperty<T, U extends Database>(valOne: T, valTwo: U) : object {
    return {
        valOne,
        valTwo
    }
}


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product)
    }
}
