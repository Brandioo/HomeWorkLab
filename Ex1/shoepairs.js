function countPairs(shoes) {
    let cnt = 0;
    for (let i = 0; i < shoes.length; i++) {
        let pairs = shoes.filter(e => {
            return e === shoes[i];
        })
        cnt = cnt + Math.floor(pairs.length / 2);
        shoes = shoes.filter(e => {
            return e !== shoes[i];
        })
    }
    return cnt;
}

const shoes = ['Blue', 'Red', 'White', 'White', 'White', 'Red', 'Blue', 'Blue', 'Red', 'White', 'Red', 'Blue', 'Blue'];
console.log(countPairs(shoes));