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