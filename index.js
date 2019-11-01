const fs = require('fs');
const directoryToSearch = './';

fs.readdir(directoryToSearch, (err, files) => {
 if(err) throw err
    console.log(`Files and Folder in the Directory: ${directoryToSearch}`);
    files.forEach(file => {
    console.log(file);
  });
});
