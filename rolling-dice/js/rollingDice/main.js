console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const randomInt = () =>Math.floor(Math.random() * 6) + 1
    // console.log(randomInt)

const roll = () =>{
 let roll1 = randomInt();
 let roll2 = randomInt(); 
 if(roll1 !== roll2){  
console.log(`${roll1} + ${roll2} == ${roll1 + roll2}`)
 }
 else{
    console.log(`${roll1} + ${roll2} == ${roll1 + roll2} DOUBLES!`)   
 } 
}

for(let i = 1;i <=10;i++){
    roll()
}