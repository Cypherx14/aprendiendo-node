const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

// const workCount = content.split(' ').length;

//count all the React words
const reactWordCount = content.match(/React/ig ?? []).length;


console.log('N. of React words', reactWordCount);

