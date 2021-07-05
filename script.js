/*
let message = 'Hello, Frelancer';
//пример инструкции. Синтаксис
if ( 2 > 1){
//код выполняться только если
//выражение в скобках вернет true
console.log(message);
}

let overTime = 'Full weekend';
let workDays = 30;
let daysOff = 10;
if (workDays > daysOff * 2){
console.log(overTime);
}

//ELSE 
let passanger = 'Welcome to plain';
let passport = 0;
let ticket = 2;
if(passport++ === ticket){
    console.log(passanger);
} else {
    console.log("Sorry, you need leave airport");
}
*/

let dog = 1;
let cat = 1;
let mouse = 1;
let duck = 1; 
let petsMarket = dog + cat + mouse + duck
console.log(petsMarket);
if (petsMarket >= 4){
    console.log('Congatulations you buy pets');
}
else if(dog >= 1){
    console.log('Congatulations, you buy dog');
} else if(cat >= 1){
    console.log('Congatulations, you buy cat');
} else if(duck >= 1){
    console.log('Congatulations, you buy duck');
} else{
    console.log('Sorry, no pets yet');
}