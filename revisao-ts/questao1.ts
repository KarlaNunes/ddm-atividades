type User = {
    name: string
    age?: number
    habilities: string[]
}

const user: User = {
    name: "Karla",
    age: 21,
    habilities: ["Caminhar", "Programar"]
}

console.log("user: ", user)