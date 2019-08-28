import React, {useState} from 'react'

const Grid = ({ next }) => {

    const [clicked, setClicked] = useState()


    const firstOnes = next.map(a => a[0])
    // console.log('firstOnes', firstOnes);

    const grid = 100
    // console.log("NEXTTTTT", next.flat())
    // const flat = next.flat()

    // let unique = [...new Set(flat)]

    const clickedValue = (z) => {
        setClicked(z)
        // console.log(z)
    }
    console.log(clicked)

    // const intersection = next.map((x, i) => x.filter(element => next[1].includes(element)))
    
    // possible dirrection
    const nextDirrection = next.map((x, i) => x.filter(ele => [clicked].includes(ele)))

    const nextDirrection2 = next.map((x, i) =>  i)
    
    console.log('nextDirrection', nextDirrection);

    let testIndexOf = nextDirrection.map( (x, i) => (x.length !==0) && x.indexOf()  )

    let indexes = []
    console.log("WITH FIND INDEX", nextDirrection.findIndex(x => x.length !==0) )

    console.log("WITH INDEX OFF", testIndexOf )

    var iterator = nextDirrection.keys(); 

    
     
    return (
        <div>
            {/* {
                next.map((a, i) => <div key={i}>{a[0]}</div>)
            } */}

            {
                [...Array(grid)].map((x, i) => {
                    return (
                        <div key = {i} className="grid">
                        {i + 1}

{
    (firstOnes.map(z => {
        return (z === i + 1) && 
        <div key = {i} onClick={() => clickedValue(z)} className="possible">
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
