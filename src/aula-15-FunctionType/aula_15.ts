type mapCallback = (item: string) => string

function mapStrings (array: Array<string>, callbackfn: mapCallback): Array<string> {
    const newArray: Array<string> = []
    for (let i =0; i<array.length; i++) {
        newArray.push(callbackfn(array[i]))
    }
    return newArray
}
const abc = ['a', 'b', 'c']
const abcMapped = mapStrings(abc, (item) => item.toUpperCase())
console.log(abcMapped)
