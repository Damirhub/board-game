import React, { useState, useEffect } from 'react'


const Grid = ({ next, setStarting }) => {

    // const firstOnes = next.map(a => a[0])

    useEffect(() => {
        setFirstOnes(next.map(a => a[0]))

    }, [next])

    const [firstOnes, setFirstOnes] = useState([])


    console.log('FIRST ONES USE TO ENABLE NEXT', firstOnes);

    const [clicked, setClicked] = useState()
    console.log('1. CLICKED', clicked);
    const [allowedNext, setAllowedNext] = useState([15, 12, 33, 45])


    // useEffect(() => {
    //     setClicked(firstOnes[0])
    // })

    // let eliminateClicked = () => (firstOnes.map( (first, i) => first[i] === clicked) ) &&  firstOnes.shift() 

    // let eliminateClicked = () => (firstOnes.map( (first, i) => first[i] === clicked) ) &&  firstOnes.shift() 
    // console.log("FIRSTONES", eliminateClicked())

    const grid = 100

    /************************************************** */
    /************************************************** */


    const toSetAllow = (clicked) => {
        // possible dirrection
        const nextDirrection = next.map(x => x.filter(ele => [clicked].includes(ele)))

        console.log("1. NEXT DIRRECTION", nextDirrection)

        // const isUsed = (firstOnes.map( (first, i) => first[i] === clicked) ) &&  firstOnes.splice(i) 
        // console.log('isUsed', isUsed);

        // finding indexes with excluded clicked value
        const allowedDirrections = nextDirrection.reduce(
            (arr, e, i) => (e.includes(clicked) && firstOnes[i] !== clicked && arr.push(i), arr), []
        )

        console.log("2. ALLOWED DIRRECTIONS INDEXES", allowedDirrections)

        // REMOVED THE PREVIOUS ONE
        return firstOnes.map((i, j) => firstOnes[allowedDirrections[j]]).filter(Number)

    }
    const clickedValue = (z) => {
        setClicked(z)
        setAllowedNext(toSetAllow(z))
    }


    // console.log("****nextDirrection******", nextDirrection)

    // console.log("allowedDirrections INDEX", allowedDirrections)

    // console.log("clicked",clicked)


    console.log("ALLOWED NEXT FIELDS", allowedNext)



    return (
        <div>

            {
                [...Array(grid)].map((x, i) => {
                    return (
                        <div key={i} onClick={() => setStarting(i)} className="grid">
                            {i + 1}

                            {
                                (firstOnes.map((z, y) => {
                                    return <div key={y}>
                                        {(z === i + 1) &&
                                            <button key={i}
                                                disabled={
                                                    z !== allowedNext[0] && allowedNext[0] && true && z !== allowedNext[1] && true && z !== allowedNext[2] && true
                                                    && z !== allowedNext[3] && true && z !== allowedNext[4] && true && z !== allowedNext[5] && true && z !== allowedNext[6] && true
                                                }

                                                // disabled={   allowedNext[y] === undefined ? false : z !==  allowedNext[y]   && true }
                                                onClick={() => {
                                                    clickedValue(z, i);
                                                }
                                                }

                                                className="possible">
                                                {/* { console.log("allowedNextUUUUUUUUUUUUUUUUU",  allowedNext[y] !== undefined ? allowedNext[y] : true   ) } */}

                                                {
                                                    // console.log("ZZZZZZZZZZZZZZ", z ),
                                                    // console.log("ALLLLOOOOOOOWEEEEED", allowedNext[y] )
                                                    // console.log("allowedNext", 
                                                    // z === allowedNext[y] && z 


                                                    // )

                                                }
                                                {z}

                                            </button>
                                        }
                                    </div>

                                }))
                            }

                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Grid
