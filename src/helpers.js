export function arrToMap(arr) {
    return arr.reduce((acc, item) => {
    	const id = item.id || item.ID || item.Id
        acc[id] = item
        return acc
    }, {})
}

export function mapToArr(obj) {
    return Object.keys(obj).map(id => obj[id])
}