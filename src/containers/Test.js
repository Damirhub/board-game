import React, { useState, useEffect } from 'react'
import { pattern } from '../functions/pattern'
import Grid from '../components/Grid';

const Test = () => {
    const [next, setNext] = useState([])

    let level = 10
    let temp = []


    useEffect(() => {


        let start = pattern(15);

        temp[0] = start
        const compare = []
        let isIt = false

        for (let i = 0; i < level; i++) {

            // isIt && console.log("%cIZZZZIITT I? ", "color:lawngreen", isIt)

            // console.log("RETURNED FROM PATTERN", start);

            // resets start after repeat
            if (isIt) {
                start = temp[i]
            }

            // while loop to exclude starting index reappear
            let nextIndex = 0
            while (nextIndex === 0) {
                nextIndex = Math.floor(Math.random() * (start.length));
            }

            start = pattern(start[nextIndex]);

            // console.log("INCOMING ELEMENT", temp[i][0])

            temp[i + 1] = start

            compare.push(temp[i][0])


            // console.log("%cCOMPARE ARRAY", "color: aqua", compare)


            // console.log(" THIS TO COMPARE ", start[0])

            const isThere = () => {
                return compare.find(n => n === start[0])
            }

            isThere() && i--

            isThere() ? (isIt = true)
                : (isIt = false)
        }


        setNext(temp)
    }, [])




    // console.log("NEXTTTT", next)
    console.table(next)

    const array1 = [1, 2, 3, 4]
    const array2 = [11, 2, 33, 4]


    // console.log("NEXT MAPPED", next.map(i => i[0]))
    // console.log("NEXT NOMAPED", next)


    return (
        <div>
            test
            <Grid next={next} />
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