const fromEuroToDollar= function (euro){
    let dollar = euro*1.07;
    return parseFloat(dollar.toFixed(2));
}

const fromDollarToYen = function (dollar){
    let yen = dollar/1.07*156.5;
    return parseFloat(yen.toFixed(2));
}

const fromYenToPound = function (yen){
    let pound = yen/156.5*0.87;
    return parseFloat(pound.toFixed(2));
}

const sum =(a, b)=>{
    return a+b;
}

console.log(sum(7,3));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
