let words = JSON.parse(localStorage.getItem('words')) || [];

function addWord() {
  const input = document.getElementById('wordInput');
  const word = input.value.trim();

  if (word !== '' && !words.includes(word)) {
    words.push(word);
    words.sort((a, b) => {
      const aCount = a.match(/a/gi)?.length || 0;
      const bCount = b.match(/a/gi)?.length || 0;
      const targetCount = 'KALA'.match(/a/gi)?.length || 0;

      const aDiff = Math.abs(targetCount - aCount);
      const bDiff = Math.abs(targetCount - bCount);

      if (aDiff === bDiff) {
        return aCount - bCount;
      }

      return aDiff - bDiff;
    });

    localStorage.setItem('words', JSON.stringify(words));
    updateWordList();
  }

  input.value = '';
}

function updateWordList() {
  const wordList = document.getElementById('wordList');
  wordList.innerHTML = '<li>KALA</li>';

  words.forEach((word) => {
    const listItem = document.createElement('li');
    listItem.textContent = word;
    wordList.appendChild(listItem);
  });
}

updateWordList();
