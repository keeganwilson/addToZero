// Starting array
let array = [28, 43, -12, 30, 4, 0, 1]

// Write your solution below:

const addToZero = (arr) => {
    let hasOpp = 'False'
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++)
            if(i !== j && arr[i] === -arr[j])
                hasOpp = 'True'
    }
    console.log(hasOpp)
}

addToZero(array);