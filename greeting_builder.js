function createGreeting (firstName=String, lastName=String, timeOfDay=String) {
    return getGreeting(timeOfDay) + ", " + formatName(firstName, lastName);
}

function formatName (fistName=String, lastName=String) {
    return fistName + ' ' + lastName;
}

function getGreeting (timeOfDay=String) {
    return "Good " + timeOfDay;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));