interface User {
    id: number
    name: string
    age: number
    active: boolean
}

const users: User[] = [
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
]

console.log(`Users: ${JSON.stringify(users)}\n`)

const activeUsers = users.filter((user) => user.active)

console.log(`Active users: ${JSON.stringify(activeUsers)}\n`)

const usersOlderThanTwentyFive = users.filter((user) => user.age > 25)

console.log(`Users older than 25: ${JSON.stringify(usersOlderThanTwentyFive)}\n`)

const userNames = users.map((user) => user.name)

console.log(`User names: ${userNames}\n`)

const userAgesPlusOne = users.map((user) => user.age + 1)

console.log(`User ages + 1: ${userAgesPlusOne}\n`)

users.forEach((user) => {
    console.log(`{ name: ${user.name}, active: ${user.active}}, \n`)
})

const sumOfUserAges = users.reduce((sumOfAges, user) => sumOfAges + user.age, 0)

console.log(`Sum of all user ages: ${sumOfUserAges}\n`)

const numberOfActiveUsers = activeUsers.reduce((totalActiveUsers, user) => totalActiveUsers + 1, 0)

console.log(`Number of active users: ${numberOfActiveUsers}\n`)

const firstJoao = users.find((user) => user.name === "João")

console.log(`First user with name João: ${JSON.stringify(firstJoao)}\n`)

const firstInactiveUser = users.find((user) => !user.active)

console.log(`First inactive user: ${JSON.stringify(firstInactiveUser)}\n`)