const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/sample.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            } 

            resolve({
                okay: true,
                message: 'file created'
            });
        });
    });
};

module.exports = {writeFile}