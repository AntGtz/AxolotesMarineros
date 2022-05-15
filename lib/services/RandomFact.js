const Reader = require("./../utils/Reader"); 
const info = Reader.readJsonFile("./facts.json");

class RandomFact{
    static Random(){
        let fact = info.map((info) => info.content)
        let random = Math.floor(Math.random() * fact.length);
        return fact[random]
    }
}
module.exports = RandomFact;