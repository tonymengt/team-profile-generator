const Prompt = require('./lib/Prompt');
const pages = require('./src/page-template')
const {writeFile} = require('./utils/generateHTML')

new Prompt().addManager()
    .then(data => {
        return pages(data);
    })
    .then(output => {
        return writeFile(output);
    })
    .catch(err => {
        console.log(err);
    });

