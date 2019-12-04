var simpleObject = {
    sayName: function () {
        console.log('simpleObject');
        return 'simpleObject';

    }

}

simpleObject.dynamicMethod = function(){ 
    console.log('Dynamic Method')    
}

simpleObject.dynamicMethod();
simpleObject.sayName();

function FunctionObject() {
    this.sayName = function () {
        console.log('simpleObject1');
        var privateFunction = function () {
            console.log('Private Function');
            console.log(FunctionObject.constructor.toString())
            return 'private function ' + FunctionObject.constructor.toString();
        }
        return privateFunction();
    }
};

var obj = new FunctionObject();
obj.sayName();

window.onload = () => {
const simpleObjectAction = document.getElementById('simpleObjectAction');
const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
simpleObjectAction.onclick = () => {
    simpleObjectDisplay.appendChild(document.createTextNode(simpleObject.sayName()));
  
}

const functionObjectAction = document.getElementById('functionObjectAction');
const functionObjectDisplay = document.getElementById('functionObjectDisplay');
functionObjectAction.onclick = () => {
    functionObjectDisplay.appendChild(document.createTextNode(obj.sayName()));
}

const customClassAction = document.getElementById('customClassAction');
const customClassDisplay = document.getElementById('customClassDisplay');
customClassAction.onclick = () => {

}
};

