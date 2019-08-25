

export const pattern = (go, flattened) => {
    {
        console.log("start: ", go);

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
        const under3 = lastDigit && lastDigit < 3

        const L =
            under3 ? low.slice(1)
                : low && (lastDigit && lastDigit > 8)
                    ? low.slice(1, 2)
                    : low;

        const M =
            (under3 || mid[0] < 0)
                ? mid.slice(1)
                : mid && (lastDigit && lastDigit > 7)
                    ? mid.slice(0, 1)
                    : mid;

        const H =
            under3 ? high.slice(1)
                : high && (lastDigit && lastDigit > 8)
                    ? high.slice(0, 2)
                    : high;

        console.log("L: ", L);
        console.log("M: ", M);
        console.log("H: ", H);


        flattened = [go, ...L, ...M, ...H];
    }
    return flattened;
};
