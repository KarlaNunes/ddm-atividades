function returnStringOrNumber(data: string | number) {
    return typeof data === "string" ? data.length : Math.pow(data, 2)
}