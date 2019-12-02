window.onload = () => {
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const numberAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display');

    const languageNameAction = document.getElementById('language-names-action');
    const languageNameDisplay = document.getElementById('language-names-display');

    const languagePopularityAction = document.getElementById('language-popularity-action');
    const languagePopularityDisplay = document.getElementById('language-popularity-display');



    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languageNames: [
            {
                language: 'JavaScript',
                rank: 1
            },
            {
                language: 'HTML',
                rank: 2
            },
            {
                language: 'CSS',
                rank: 3
            },
            {
                language: 'Java',
                rank: 4
            },
            {
                language: 'C#',
                rank: 6
            },
            {
                language: 'Python',
                rank: 5
            },
            {
                language: 'C/C++',
                rank: 7
            }
        ],


        languagePopularity: []
    };

    function sortlangs(a, b) {
        if (a.language > b.language)
            return 1;
        else if (a.language < b.language)
            return -1;
        else
            return 0;
    };


    numberAction.onclick = () => {
        numbersDisplay.innerHTML = '';
        arrays.numbers.sort((a, b) => a - b);

        for (let number of arrays.numbers) {
            console.log(number);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        };
    };
    languageNameAction.onclick = () => {
        languageNameDisplay.innerHTML = '';
        arrays.languageNames.sort(sortlangs);

        for (let name of arrays.languageNames) {
            console.log(name);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(name.language));
            languageNameDisplay.appendChild(li);
        };
    };
    languagePopularityAction.onclick = () => {
        arrays.languageNames.sort((a, b) => a.rank - b.rank);
        languagePopularityDisplay.innerHTML = '';

        for (let pop of arrays.languageNames) {
            console.log(pop.language);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(pop.language + ' rank: ' + pop.rank));
            languagePopularityDisplay.appendChild(li);
        }
    };
    
};
