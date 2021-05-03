// Code your solution here

        
/*const driver = drivers.filter(function(val){
    return drivers(val)
})*/


function findMatching(drivers, string) {
    return drivers.filter(element => {
        if (element.toLowerCase() === string.toLowerCase()) {
            return element
        }
    })
}

function fuzzyMatch(drivers, string) {
    let x = drivers.filter(element => {
        return element.startsWith(string)
    })
    return x
}

function matchName(driverObjects, string){
    let y = driverObjects.filter(element =>{
        if (element.name === string) {
            return string
        }
    })
    return y
}

/* function fuzzyMatch(drivers, string) {
    let x = drivers.filter(element => {
         return element.startsWith(string) */

        
