var programminglanguages = ['HTML & CSS', 'Javascript', 'Python'];

console.log(programminglanguages);

console.log(programminglanguages[0])

programminglanguages.push('Wordpress')

programminglanguages.pop()

programminglanguages.unshift('c++')

programminglanguages.shift()

programminglanguages.splice(0,2,'PHP')

console.log(Math.random()*5)

console.log(Math.floor(Math.random()*5))

var students = ['Reis', 'Diella']

var [s1, s2] = students

console.log(s1);
console.log(s2);

var places = ['London', 'Paris', 'New York', 'Berlin']

var [firstplace, secondplace] = places

console.log(firstplace)

var numbers = [1,2,3,4,5,6,7,8,9,10]

var [first, second, ...otherNumbers] = numbers

console.log(first);
console.log(second);
console.log(otherNumbers.toString());

