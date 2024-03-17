type MessageType = "asc" | "desc"

const returnMessage = (value: MessageType) => value === "asc" ? "Crescente" : "Decrescente"

// function returnMessage(value: MessageType) {
//     return value === "asc" ? "Crescente" : "Decrescente"
// }