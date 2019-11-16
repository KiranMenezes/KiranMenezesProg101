                
window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
                           
    function simpleFunction() {
        console.log ("functions should consits of statements designed to perform a single task.");
        simpleFunctionDisplay.textContent = "simple";
}

functionCallsAction.onclick = function() {
    simple();
    const data = nameDisplay.value;  
}
          

function functionParameters (value) {
    console.log(value);
}

function functionReturn(addResult) {
    return "The add function returned" + addResult;
}

function add(a, b) {
    const addResult = a + b;
    console.log('Inside add', addResult);
    return addResult;
}

simpleFunction();

functionParameters("Many functions take parameters.");

    const returnValue = functionReturn(addResult);

    const addResult = add(2, 3);
    console.log('Add Result', addResult);
    const returnValue = functionReturn(addResult);

    console.log(returnValue); 

    const result = add(2, 3);

    console.log(result);

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }

    const someAction = document.getElementById('someAction');
someAction.onclick = function() {
    // Handle the onclick event in here.
}

