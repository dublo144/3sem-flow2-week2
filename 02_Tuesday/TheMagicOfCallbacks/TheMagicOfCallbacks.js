/*  a) Using the filter method:
    Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names that contains the letter ‘a’.
 */

let names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
let filteredNames = names.filter(name => name.includes('a'));

/*  b) Using the map method:
    Use the names-array created above, and, using its map method, create a new array with all names reversed.
 */
let reversedNames = names.map(name =>
    name
        .split('')
        .reverse()
        .join('')
);

const myFilter = (array, callback) => {
    const result = [];
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index])) {
            result.push(array[index]);
        }
    }
    return result;
};

const myMap = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
};

console.log(
    'myfilter:',
    myFilter(names, name => name.includes('a'))
);

console.log(
    'myMap:',
    myMap(names, name =>
        name
            .split('')
            .reverse()
            .join('')
    )
);

Array.prototype.myFilterProto = callback => {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) result.push(this[i]);
    }
    return result;
};

Array.prototype.myMap = callback => {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
};

/* -------------------------------------------------------------------------- */
/*              4) Getting really comfortable with filter and map             */
/* -------------------------------------------------------------------------- */

/*
 * b) Use map() to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
 */

const nameAnchors = names.map(name => `<a href="">${name}</a>`);
nameAnchors.push('</nav>');
nameAnchors.unshift('<nav>');
nameAnchors.join('');

/*
  c) Use map()+(join + ..) to create a string, representing a two column table, for the data given below:
*/
const tableInfo = [
    { name: 'Lars', phone: '1234567' },
    { name: 'Peter', phone: '675843' },
    { name: 'Jan', phone: '98547' },
    { name: 'Bo', phone: '79345' }
];

let tableHead = [
    '<table>',
    '<thead>',
    '<tr>',
    '<th>Name</th>',
    '<th>Phone</th>',
    '</tr>',
    '</thead>'
];
let tableBody = tableInfo.map(
    nameObj => `<tr><td>${nameObj.name}</td> <td>${nameObj.phone}</td></tr>`
);
tableBody.unshift('<tbody>');
tableBody.push('</tbody>');
tableBody.push('</table>');

let table = tableHead.concat(tableBody);

document.getElementById('nav').innerHTML = nameAnchors;
document.getElementById('names').innerHTML = table.join('');

/* -------------------------------------------------------------------------- */
/*                                   Reduce                                   */
/* -------------------------------------------------------------------------- */

let all = ['Lars', 'Peter', 'Jan', 'Bo'];

const commaReducer = (string, currentElement, index, srcArray) => {
    string += currentElement;
    if (index < srcArray.length - 1) {
        string += ', ';
    }
    return string;
};

console.log(all.reduce(commaReducer, ''));

let numbers = [2, 3, 67, 33];

const addAllReducer = (acc, current) => acc + current;
console.log(numbers.reduce(addAllReducer, 0));

let members = [
    { name: 'Peter', age: 18 },
    { name: 'Jan', age: 35 },
    { name: 'Janne', age: 25 },
    { name: 'Martin', age: 22 }
];

const averageReducer = (total, member, index, srcArray) =>
    total + member.age / srcArray.length;
console.log(members.reduce(averageReducer, 0));

var votes = [
    'Clinton',
    'Trump',
    'Clinton',
    'Clinton',
    'Trump',
    'Trump',
    'Trump',
    'None'
];

const votesReducer = (acc, current) => {
    if (acc[current]) {
        acc[current]++;
    } else {
        acc[current] = 1;
    }
    return acc;
};
console.log(votes.reduce(votesReducer, {}));

/* -------------------------------------------------------------------------- */
/*                                  Hoisting                                  */
/* -------------------------------------------------------------------------- */

// Examples of hoisting

x = 10;
console.log(x);
var x;

myName = 'Mads';
console.log(myName);
var myname;

/* -------------------------------------------------------------------------- */
/*                                    This                                    */
/* -------------------------------------------------------------------------- */

let person = {
    firstName: 'Mads',
    lastName: 'Brandt',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

let person2 = {
    firstName: 'Postmand',
    lastName: 'Per'
};

console.log(person.fullName());
console.log(person.fullName.call(person2));

/* -------------------------------------------------------------------------- */
/*                       Reusable Modules with Closures                       */
/* -------------------------------------------------------------------------- */

const add = () => {
    let counter = 0;
    return () => {
        counter += 1;
        return counter;
    };
};

add();
add();
add();
