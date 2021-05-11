function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const fLoc = function (treeLoc, arr2d) {
        return arr2d.map(fruitLoc => (treeLoc + fruitLoc));
    }
    const fRange = function (s, t, arr2d) {
        let a, b;
        a = 0; b = 0;
        arr2d.forEach((f, i) => {
            if (i === 0) {
                f.forEach(loc => s <= loc && loc <= t ? a++ : null);
            }
            if (i === 1) {
                f.forEach(loc => s <= loc && loc <= t ? b++ : null);
            }
        });
        return [a, b];
    }
    console.log(fRange(s, t, [fLoc(a, apples), fLoc(b, oranges)]).join('\n'));
}


