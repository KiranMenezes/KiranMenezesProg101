window.onload = () => {
    const myForm = document.getElementById('alt-styles');
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="styles"]:checked').value;
        if (value.toLowerCase() === 'default') {
            swapStyleSheet("/styles/new-styles.css");
    
        } else if (value.toLowerCase() === 'alternative') {
            swapStyleSheet("/styles/new-styles2.css");
        }
    })
};

