function countNoOfMountainsAndValleys(steps) {
    let cnt = 0, m = 0, v = 0;
    for (let i = 0; i < steps.length; i++) {
        steps[i] === 'U' ? cnt++ : cnt--;
        if (cnt === 0) {
            steps[i - 1] === 'D' ? m++ : v++;
        }
    }
    return m + ' mountains and ' + v + ' valleys';
}

const steps = ['U', 'U', 'U', 'D', 'D', 'U', 'U', 'D', 'D', 'D', 'D', 'D', 'D', 'U', 'U', 'D', 'D', 'U', 'U', 'U'];
console.log(countNoOfMountainsAndValleys(steps));