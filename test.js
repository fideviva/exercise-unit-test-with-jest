const {sum} = require('./app.js');


test('adds 14 + 9 to equal 23', ()=>{
    let total= sum(14,9);
    expect(total).toBe(23);
})

test('One euro should be 1.07 dollars',()=>{
    const{fromEuroToDollar} =require('./app.js')
    let dollars = fromEuroToDollar(1);
    expect(dollars).toBe(1.07)
})

test('two dollars should be 292.52 yens',()=>{
    const{fromDollarToYen} = require('./app.js')
    let yens=fromDollarToYen(2);
    expect(yens).toBe(292.52);
})

test('three yens should be 0.02 pounds',()=>{
    const {fromYenToPound} = require('./app.js');
    let pounds = fromYenToPound(3);
    expect(pounds).toBe(0.02);
})