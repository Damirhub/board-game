import React, { useState, useEffect } from 'react'
import { pattern } from '../functions/pattern'

const Test = () => {
    const [next, setNext] = useState([])

    let level = 5
    let temp = []


    useEffect(() => {


        let start = pattern(55);

        temp[0] = start

        for (let i = 0; i < level; i++) {


            // console.log("TESTING IMPORT VAR arrays", start);

            // while loop to exclude starting index reappear
            let nextIndex = 0
            while (nextIndex === 0) {
                nextIndex = Math.floor(Math.random() * (start.length));
            }

            // console.log("index", nextIndex);

            start = pattern(start[nextIndex]);


            temp[i + 1] = start
        }

        setNext(temp)
    }, [])




    // console.log("NEXTTTT", next)
    console.table(next)

    const array1 = [1, 2, 3, 4]
    const array2 = [11, 2, 33, 4]


    console.log("NEXT MAPPED", next.map(i => i[0]))
    console.log("NEXT NOMAPED", next)


    const intersection = next.map(x => x.filter(element => next[1].includes(element)))

    console.log("isMatch? ", intersection)

    return (
        <div>
            test
            {
                next.map((a, i) => <div>{a[0]}</div>)
            }
        </div>
    )
}

export default Test



// const under3 = lastDigit && lastDigit < 3
// const startUnder10 = !lastDigit || mid[0] > 7
// // const startOver10 = 

// const L =
//     under3 ? low.slice(1)
//     : (lastDigit && lastDigit > 8) ? low.slice(1, 2)
//     // : (lastDigit && lastDigit > 8) || go>97 ? low.slice(1, 2)
//     : low;

// const M =
//     (under3 || mid[0] < 0) ? mid.slice(1)
//     : startUnder10 || (lastDigit && lastDigit > 7) ? mid.slice(0, 1)
//     : mid;

// const H =
//     under3 ? high.slice(1)
//     : startUnder10 || (lastDigit && lastDigit > 8) ? high.slice(0, 2)
//     : high;