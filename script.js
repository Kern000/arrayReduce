const items = [
    {name: "rice", price: 5}, 
    {name: "Book", price: 20}, 
    {name: "chicken", price:10},
    {name: "Monitor", price: 100},
]

// This is API Json format, and it is array of objects (dictionary - in Python)

let totalPrice = 0
items.forEach(item => {
    totalPrice += item.price})

// Method 2: reduce with two arbitrary arguments, one is the function with accumulator (total), 2nd argument: (initial).

const totalPrice2 = items.reduce((total, item) => {
    return (total + item.price)    
}, 0 )

//How reduce works is that total (Accumulator) accumulates the initial value and add on what is returned on each iteration of the function
//on each loop, you get the total accumulated, and the item being looped.

//  debug in this manner if needed

const totalPrice3 = items.reduce((total, item) => {
    console.log(`total: ${total}`)
    console.log(`item: ${item.price}`)
    return (total + item.price)    
}, 0 )

// Method 3: use reduce to group people and items

const people = [
    {name: 'kyle', age: 26},
    {name: 'John', age: 26},
    {name: 'Sally', age: 26},
    {name: 'Jill', age: 26},
]

const groups = people.reduce((groupedPeople, indivPerson) => {
    if(groupedPeople[indivPerson.age] == null) {
        groupedPeople[indivPerson.age] = []
        groupedPeople[indivPerson.age].push(indivPerson)}
    return groupedPeople
    }, {})

// This is a sorting function
// initial value will be an empty object
// accumulator, which is groupedPeople, started with empty object
// if(groupedPeople[indivPerson.age] == null) 
// This means if an age is not in the accumulator object, it will create an empty array, and push that indivPerson into it.
// assign indivPerson's age as key, and value assigned to the key is [] which we will push names inside as we loop through indivPerson in the People object
// This effectively creates an object that sorts people based on their age.
// The application of this can be used for various sorting. 
// Give that this sorting only loops once, the time complexity is O(n).


const numbers = [13, 2, 5]

const sum = numbers.reduce((total, number, index, array) => {
    console.log(index)
    console.log(array)
    return total + number    
}, 0)

// if no 2nd argument, initial value, will take first value of the array as initial value and skip the first loop.
// if array is empty, will return error




