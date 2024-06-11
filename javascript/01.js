function isRed(fruits) {
    if (fruits === 'apple' || fruits === 'strawberry' || fruits === 'cherries') {
        return true;
    } else {
        return false;
    }
}

console.log(" Normal function :" + isRed('apple'));

var isRed = fruits => ['apple' , 'strawberry', 'cherries', 'banana'].includes(fruits);

console.log(" Arrow function :" + isRed('banana'));
