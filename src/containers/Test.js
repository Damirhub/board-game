import React, { useState, useEffect } from 'react'
import { pattern } from '../functions/pattern'

const Test = () => {
    const [next, setNext] = useState([[]])

    let level = 6
    let temp = []


    useEffect(() => {


        let start = pattern(42);

        temp[0] = start

        for (let i = 0; i < level; i++) {


            console.log("TESTING IMPORT VAR arrays", start);

            const nextIndex = Math.round(Math.random() * (start.length - 1));

            // console.log("index", nextIndex);

            start = pattern(start[nextIndex]);


            temp[i+1] = start
        }

        setNext(temp)
    }, [])




    console.log("NEXTTTT", next)
    console.table( next)

    const array1 = [1, 2, 3, 4]
    const array2 = [11, 2, 33, 4]
    
    
    //  const intersection = next[0].filter(element => next[1].includes(element));

     const intersection = next.map(x => x.filter(element => next[1].includes(element)))
    
    console.log("isMatch? ", intersection)

    return (
        <div>
            test
        </div>
    )
}

export default Test
