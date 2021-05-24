console.log("Do you believe in magic?");
console.log("------------------------");

const spells = [
    { 
        name : "Turn enemy into a newt",
        isEvil : true,
        energyRequired : 5.1
    },
    {
        name : "Conjure some gold for a local charity",
        isEvil : false,
        energyRequired : 2.99
    },
    {
        name : "Give a deaf person the ability to heal",
        isEvil : false,
        energyRequired : 12.2
    },  
    {
        name : "Make yourself emperor of the universe",
        isEvil : true,
        energyRequired : 100.0
    },  
    {
        name : "Convince your relatives your political views are correct",
        isEvil : false,
        energyRequired : 2921.5
    }
]


console.log("Good Book")
spells.map(spell => 
    {
        if(!spell.isEvil){
        console.log(spell.name)
        }
    }
    )

console.log(" ")
console.log("Evil Book")
spells.map(spell => 
    {
        if(spell.isEvil){
        console.log(spell.name)
        }
    }
    )