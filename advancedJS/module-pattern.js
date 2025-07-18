
//This creates a calculator object. The function within it gets called immediately so calculator = {add: function}
const calculator = (function () {

    //This isn't useful because it's not returns so it can't be used outside
    const secretSauce = () => console.log("Do something super secret!");


    const add = (a, b) => {
        secretSauce();
        return a + b;
    
    };

    return {add};
})();


console.log(calculator.add(3, 4));

//This is undefined because it wasn't returned.
//console.log(calculator.secretSauce);








//IIFE's like the above are SINGLE USE FACTORIES!!!!

//Factories can be called as many times as you want in order to to make multiple objects whereas IIFE's are used to create one off things.