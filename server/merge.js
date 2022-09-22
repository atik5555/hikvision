const findRemoveSync = require('find-remove')

setInterval(() => {
    var result = findRemoveSync('./videos/merge', { age: { seconds: 4 }, extensions: '.ts' });
    console.log(result);
}, 4000);