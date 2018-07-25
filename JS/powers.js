/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class 
        

*/
var powerUp = document.getElementById ("powerList")

document.querySelector("#activate-flight").addEventListener("click", function(){
    {
        powerUp.classList.add("enabled")
        powerUp.classList.remove("disabled")
        
        console.log("powerUp.classList", powerUp.classList)
      };
});


/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/