/*
const height = 5;
if (height >= 5) {
    console.log('We have a big one');
}

const height = 5;
if (height >= 5) {
    console.log('We have a big one');
} else {
    console.log('We have a little one');
}

const height = 5;
if (height >= 5) {
    console.log('We have a big one');
} else if (height >= 0) {
    console.log('We have a little one');
} else {
    console.log('We have a negative number or invalid number')
}

height = 'little';

switch (height) {
    case 'little':
        console.log('Switch: a little one is smaller than twentyfive');
        break;

    case ('big'):
        console.log('Switch: a big one is twentyfive or greater');
        break;

    default:
        console.log('We do not know about this one.')
}
*/

window.onload = () => {
    const simpleBranchAction = document.getElementById('simpleBranchAction');
    const simpleBranchDisplay = document.getElementById('simpleBranchDisplay');

    simpleBranchAction.onclick = (event) => {

        console.log('SIMPLE branch ACTION ON CLICK WAS CALLED');
        let height = 4;
        if (height >= 25) {
            simpleBranchDisplay.textContent = 'We have a big one';
        } else {
            simpleBranchDisplay.textContent = 'We have a little one';
        }
    }
    simpleifelseAction.onclick = (event) => {
        console.log('SIMPLE if-else ACTION ON CLICK WAS CALLED');
        const height = 50;
        if (height >= 25) {
            simpleifelseDisplay.textContent = 'We have a big one';
            console.log('We have a big one');
        } else if (height >= 0) {
            simpleifelseDisplay.textContent = 'We have a little one';
            console.log('We have a little one');
        } else {
            simpleifelseDisplay.textContent = 'We have an error';
            console.log('We have a negative number or invalid number')
        }

    }
    simpleswitchAction.onclick = (event) => {
        console.log('SIMPLE switch ACTION ON CLICK WAS CALLED');
        height = 'little';

        switch (height) {
            case 'little':
                simpleswitchDisplay.textContent = 'Switch: a little one is smaller than twentyfive';
                console.log('Switch: a little one is smaller than twentyfive');
                break;

            case ('big'):
                simpleswitchDisplay.textContent = 'Switch: a big one is twentyfive or greater';
                console.log('Switch: a big one is twentyfive or greater');
                break;

            default:
                console.log('We do not know about this one.')
        }
    }
}


