const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 
            'Black', 
            'Green', 
            'Yellow', 
            'Purple', 
            'Red', 
            'White' 
        ]
    },
    calculateDiscoutedPrice: function( percentage ) {
        return this.price * ( 100 -percentage ) / 100;
    }
};

iPhone11.calculateDiscoutedPrice = iPhone11.calculateDiscoutedPrice.bind( iPhone11 );

const printPhoneDetails = ( { manufacturer, name, price,  calculateDiscoutedPrice} ) => {
    console.log (`${manufacturer} ${name} is available at a 10% discounted rate of $${calculateDiscoutedPrice(10)}`);
};

printPhoneDetails(iPhone11);