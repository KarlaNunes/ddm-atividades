var users = [
    {
        id: 1,
        name: "Karla",
        age: 21,
        active: true
    },
    {
        id: 2,
        name: "Joseane",
        age: 19,
        active: false
    },
    {
        id: 3,
        name: "Yara",
        age: 17,
        active: true
    },
    {
        id: 4,
        name: "João",
        age: 20,
        active: false
    },
    {
        id: 5,
        name: "Ted",
        age: 37,
        active: true
    },
    {
        id: 5,
        name: "João",
        age: 12,
        active: true
    }
];
console.log("Users: ".concat(JSON.stringify(users), "\n"));
var activeUsers = users.filter(function (user) { return user.active; });
console.log("Active users: ".concat(JSON.stringify(activeUsers), "\n"));
var usersOlderThanTwentyFive = users.filter(function (user) { return user.age > 25; });
console.log("Users older than 25: ".concat(JSON.stringify(usersOlderThanTwentyFive), "\n"));
var userNames = users.map(function (user) { return user.name; });
console.log("User names: ".concat(userNames, "\n"));
var userAgesPlusOne = users.map(function (user) { return user.age + 1; });
console.log("User ages + 1: ".concat(userAgesPlusOne, "\n"));
users.forEach(function (user) {
    console.log("{ name: ".concat(user.name, ", active: ").concat(user.active, "}, \n"));
});
var sumOfUserAges = users.reduce(function (sumOfAges, user) { return sumOfAges + user.age; }, 0);
console.log("Sum of all user ages: ".concat(sumOfUserAges, "\n"));
var numberOfActiveUsers = activeUsers.reduce(function (totalActiveUsers, user) { return totalActiveUsers + 1; }, 0);
console.log("Number of active users: ".concat(numberOfActiveUsers, "\n"));
var firstJoao = users.find(function (user) { return user.name === "João"; });
console.log("First user with name Jo\u00E3o: ".concat(JSON.stringify(firstJoao), "\n"));
var firstInactiveUser = users.find(function (user) { return !user.active; });
console.log("First inactive user: ".concat(JSON.stringify(firstInactiveUser), "\n"));
