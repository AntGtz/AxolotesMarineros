const RandomFact=require("./../services/RandomFact");
let fact = RandomFact.Random();
console.log(fact)
function changeFact(){
    document.getElementById("fact").textContent=fact;
    }