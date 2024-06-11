function isRed(fruits) {
    if (fruits === 'apple' || fruits === 'strawberry' || fruits === 'cherries') {
        return true;
    } else {
        return false;
    }
}


var isRed = fruits => ['apple' , 'strawberry', 'cherries'].includes(fruits);