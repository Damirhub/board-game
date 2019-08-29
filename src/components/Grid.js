import React, { useState, useEffect } from 'react'


const Grid = ({ next, setStarting }) => {

    const firstOnes = next.map(a => a[0])

    const bla = firstOnes[0]



    const [clicked, setClicked] = useState(bla)



    // useEffect(() => {
    //     setClicked(firstOnes[0])

    // })


    console.log('firstOnes', firstOnes);

    const grid = 100
    // console.log("NEXTTTTT", next.flat())
    // const flat = next.flat()

    // let unique = [...new Set(flat)]

    const clickedValue = (z, i) => {
        setClicked(z)
        console.log('iIII', i)
        console.log('zzzZ', z)
    }
    console.log(clicked)

    // const intersection = next.map((x, i) => x.filter(element => next[1].includes(element)))

    // possible dirrection
    const nextDirrection = next.map((x, i) => x.filter(ele => [clicked].includes(ele)))




    // finding indexes excluded clicked value
    const possibleDirrection = nextDirrection.reduce(
        (arr, e, i) => (e.includes(clicked) && firstOnes[i] !== clicked && arr.push(i), arr), []
    )



    console.log(possibleDirrection)





    return (
        <div>
            {/* {
                next.map((a, i) => <div key={i}>{a[0]}</div>)
            } */}

            {
                [...Array(grid)].map((x, i) => {
                    return (
                        <div key={i} onClick={() => setStarting(i)} className="grid">
                            {i + 1}

                            {
                                (firstOnes.map(z => {
                                    return (z === i + 1) &&
                                        <div key={i} onClick={() => clickedValue(z, i)} className="possible">
                                            {z}
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
