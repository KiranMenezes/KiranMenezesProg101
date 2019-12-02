var simpleObject = {
    sayName: function() 
    {

    } 
};


const simpleObjectButton = document.getElementById('simpleObjectAction');

simpleObjectButton.onclick = function() {       

    // Get the display controls
    const getNameDisplay = document.getElementById('simpleObjectDisplay');    

    // Call get name
    const name = myObject.getName();
    getNameDisplay.textContent = name;    
}