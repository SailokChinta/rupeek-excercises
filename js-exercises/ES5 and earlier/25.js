var phones = [
    { 
        name : 'Samsung Galaxy S10+ Plus', 
        price: 620, type: 'refurbished', 
        manufacturer: 'Samsung' 
    },
    { 
        name : 'Apple iPhone 7 Plus', 
        price: 450, 
        type: 'refurbished', 
        manufacturer: 'Apple'
    },
    { 
        name : 'One Plus 6', 
        price: 430, 
        type: 'new', 
        manufacturer: 'OnePlus' 
    },
    { 
        name : 'Apple iPhone Xs', 
        price: 910,
        type: 'new', 
        manufacturer: 'Apple' 
    },
    { 
        name : 'One Plus 7', 
        price: 430, 
        type: 'refurbished', 
        manufacturer: 'OnePlus' 
    },
    { 
        name : 'Apple iPhone 8 Plus', 
        price: 610, 
        type: 'new', 
        manufacturer: 'Apple' 
    },
];

const phoneBrand = phones.map( phone => phone.name );
console.log ( phoneBrand );

const newPhones = phones.filter ( phone => phone.type === 'new' );
console.log ( newPhones );

const budgetPhones = phones.filter( phone  => phone.price <= 440).map( phone => phone.name );
console.log ( budgetPhones );