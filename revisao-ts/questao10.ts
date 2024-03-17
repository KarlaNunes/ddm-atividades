type ObjectType = {
    properties: string
}

function addPropertyInObject(object: ObjectType) {
    return {...object, name: ""}
}