

export const pattern = (go, flattened) => {
    {
        // console.log("start: ", go);

        let size = 10;

        let lowLeft = go - 2 * size - 2;
        let lowRight = go - 2 * size + 2;

        let midLeft = go - 3;
        let midRight = go + 3;

        let highLeft = go + 2 * size - 2;
        let highRoght = go + 2 * size + 2;

        let lowMid = go - 3 * size;
        let highMid = go + 3 * size;

        let lows = [lowLeft, lowMid, lowRight];
        let mids = [midLeft, midRight];
        let highs = [highLeft, highMid, highRoght];

        const low = lows.filter(low => low > 0);
        const high = highs.filter(high => high < size * size + 1);
        const mid = mids;

        // console.log(lowLeft, lowMid, lowRight);
        // console.log(midLeft, go, midRight);
        // console.log(highLeft, highMid, highRoght);

        const lastDigit = go > 10 && Number(go.toString().slice(1));

        // console.log("LASTDIGIT", lastDigit);


        //to eliminata console warning
        const under4 = lastDigit && lastDigit < 4
        const startUnder10 = !lastDigit || mid[0] > 7
        // const startOver10 = 

        const L =
            under4 ? low.slice(1)
                :

                // :
                (lastDigit && lastDigit > 7 || lastDigit === 0) ? low.slice(1, 2)
                    // : (lastDigit && lastDigit > 8) || go>97 ? low.slice(1, 2)
                    : low;

        const M =
            (under4 || mid[0] < 1) ? mid.slice(1)
                :
                // startUnder10 || 
                (lastDigit && lastDigit > 7) ? mid.slice(0, 1)
                    : startUnder10 ? mid.slice(0, 1)
                        : mid;

        const H =
            under4 ? high.slice(1)
                :
                startUnder10 ||
                    (lastDigit && lastDigit > 8) ? high.slice(0, 2)
                    : high;

        // console.log("L: ", L);
        // console.log("M: ", M);
        // console.log("H: ", H);


        flattened = [go, ...L, ...M, ...H];
    }
    return flattened;
};
