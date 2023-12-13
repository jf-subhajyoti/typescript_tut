const user = {
    name: 'Subh',
    email: 'subh@subh.com',
    isActive: true,
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: 'subh', isPaid: false});

function createCourse():{name: string, price: number}{
    return ({ name: 'typescript', price: 299 });
}

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCard?: string
}

function createUser1(user: User) {

}

createUser1({_id: '1', name: 'subh', email: 'subh@gmail.com', isActive: true})

var newUser : User = {
    _id: '2',
    name: 'h',
    email: 'h@h.com',
    isActive: false
}

type cardNumber = {
    cardNo: string
}

type cardName = {
    name: string
}

type cardDetails = cardNumber & cardName