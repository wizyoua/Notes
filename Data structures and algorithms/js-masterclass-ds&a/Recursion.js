//Recursion is a function that calls itself until it doesn't
// the process of recursion has to be the same every time
// each time we call the function it has to be operating on a smaller piece of data
function openGiftBoxes() {

    //recursion always needs a base case
    if (isBall) return ball;

    //if not then call the function again
    openGiftBoxes();
}