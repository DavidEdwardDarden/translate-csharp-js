
// We must specify the Type of the "names" variable.
//  It is a "List" that can only contain "strings".
let names = ["Nashville", "Hong Kong", "The back yard", "Earth",
"London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

// Print some output to the terminal (aka. "Console");
console.log("All Place Names");

// Iterate over each "name" in the "names" list
names.map(namesItem => console.log(namesItem))


// When you don't pass an argument to WriteLine, it simply outputs a blank line.
//  Here we use that to add a little space around the output.
console.log("");

// Filter the list to create a new list that only has 
//  place names that start with the word "The".
console.log(`'The' Places Names`)
names.map(namesItem => {
    if(namesItem.startsWith("The")){
    console.log(namesItem)
    }
}
    )


