import React, { useState, useEffect } from 'react'


const Grid = ({ next, setStarting }) => {

    const firstOnes = next.map(a => a[0])

    // const bla = firstOnes[0]

    const [clicked, setClicked] = useState()
    const [allowedNext, setAllowedNext] = useState([15, 33])


    // useEffect(() => {
    //     setClicked(firstOnes[0])
    // })


    const grid = 100
    // console.log("NEXTTTTT", next.flat())
    // const flat = next.flat()

    // let unique = [...new Set(flat)]



    /********************************************** */
    /************************************************** */


    const toSetAllow = (clicked) => {
        // possible dirrection
        const nextDirrection = next.map(x => x.filter(ele => [clicked].includes(ele)))

    // finding indexes with excluded clicked value
        const allowedDirrections = nextDirrection.reduce(
            (arr, e, i) => (e.includes(clicked) && firstOnes[i] !== clicked && arr.push(i), arr), []
        )

        return firstOnes.map((i, j) => firstOnes[allowedDirrections[j]]).filter(Number)

    }
    const clickedValue = (z) => {
        setClicked(z)
        setAllowedNext(toSetAllow(z))
    }


    // console.log("****nextDirrection******", nextDirrection)

    // console.log("allowedDirrections INDEX", allowedDirrections)

    // console.log("clicked",clicked)

    console.log('FIRST ONES USE TO ENABLE NEXT', firstOnes);
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
                                    return <>
                                        {(z === i + 1) &&
                                            <button key={i}
                                                // disabled={z !== allowedNext[0] && true && z !== allowedNext[1] && true}

                                                disabled={ ( z !== allowedNext[y])  && true }
                                                onClick={() => {
                                                    clickedValue(z);
                                                }
                                                }

                                                className="possible">
                                                {/* { console.log("allowedNextUUUUUUUUUUUUUUUUU",  allowedNext[y] !== undefined ? allowedNext[y] : true   ) } */}

                                                {
                                                    console.log("ZZZZZZZZZZZZZZ", z ),
                                                    console.log("allowedNext", z === allowedNext[y] && z + 'x')
                    
                                            }
                                                {z}

                                            </button>}
                                        {
                                            // z === allowedFieldsNum[0] &&
                                            // <div key={i} onClick={() => clickedValue(z)} className="possible2">
                                            //     {z}
                                            // </div>
                                        }
                                    </>

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
