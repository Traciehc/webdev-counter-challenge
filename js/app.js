"using strict";

let count = 0;

const countElement = document.querySelector(".count");
const incrementBtn = document.querySelector(".increment-btn");
const resetBtn = document.querySelector(".reset-btn");
const decrementBtn = document.querySelector(".decrement-btn");


function incrementCount() {
    // Write the relevant code in this block
    count++; 
    updateCount();
    

}


function decrementCount() {
    // Write the relevant code in this block
    count--; 
    updateCount();
}


function resetCount() {
    // Write the relevant code in this block
    count = 0; 
    updateCount();
}

function renderUpdatedCount() {
    countElement.innerText = count;
}

incrementBtn.addEventListener("click", function () {
    // Write code below this line
incrementBtn.addEventListener("click", incrementCount);


    // STOP HERE


    renderUpdatedCount();
});

resetBtn.addEventListener("click", function () {
    // Write code below this line
    resetBtn.addEventListener("click", resetCount);

    // STOP HERE
    
    
    renderUpdatedCount();
});

decrementBtn.addEventListener("click", function () {
    // Write code below this line
    decrementBtn.addEventListener("click", decrementCount);

    // STOP HERE


    renderUpdatedCount();
});
