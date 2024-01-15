document.addEventListener('DOMContentLoaded', function () {
    const highlightButton = document.getElementById('highlightButton');
    const wordListInput = document.getElementById('wordList');
    const textPassageInput = document.getElementById('textPassage');
    const outputDiv = document.getElementById('highlightedText');

    highlightButton.addEventListener('click', function () {
        console.log("Buttone clicked!");
        const wordList = wordListInput.value.split(','); // Splitting words by comma
        let textPassage = textPassageInput.value;

        // Highlighting words
        wordList.forEach(word => {
            const regex = new RegExp('\\b' + word.trim() + '\\b', 'gi'); // Updated regex for whole words
            textPassage = textPassage.replace(regex, `<span class="highlight">${word}</span>`);
        });

        outputDiv.innerHTML = textPassage;
    });
});

