let LOG = console.log

const pizza = [
    {
        name: "pep",
        number: 3,
        price: 5
    },

    {
        name: "mushroom",
        number: 3,
        price: 5
    },

    {
        name: "mango",
        number: 3,
        price: 5
    }
    
    //"pep", "mushroom", "mango", "pineapple"
];

const [pep, mushroom] = pizza;

// console.log(pizza[1]);
// console.log(typeof pep);

/*

// OBJECT DESTRUCTURING

*/

var pizzaObj = {
    pepp: "monday",
    array: [
        1,
        2,
        3
    ],
    funFunction: function(name){
        LOG(`I'm ${name}'s function`);
    }
};

// pizzaObj.funFunction();

// const {peppStr,arrayArr, funFunction} = pizzaObj;

// funFunction("Chris");

var dogType = "pug";
var dog = {
    [dogType + 'Bark'] (){
        LOG("I'm a pug!");
    }
}

const {pugBark} = dog;
pugBark();