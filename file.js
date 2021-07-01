//How to read from a text file

const fs = require('fs');

let readAndAppendFile = () => {
    fs.readFile('hello2.txt', {encoding: 'utf8'}, (err  ,data) => {
        //console.log(data);

        //Append data into text file
        fs.appendFile('hello.txt', data, () => {
            if(err){
                console.log('Data append failed.');
            }
            else{
                console.log('Data append done.')
            }
        })
    })
}

let readAndWriteFile = () => {
        //How to write a text file (completely writing)
    fs.readFile('hello2.txt', {encoding: 'utf8'}, (err  ,data) => {

        fs.writeFile('hello.text', data, ( ) => {
            if(err){
                console.log('Data copying failed.');
            }
            else{
                console.log('Data copying done.')
            }
        })
    })
}

let deleteFile = () => {

    fs.unlink('willdel.txt', (error) => {
        if(error){
            throw error;
        }
        console.log('File deleted');
    })

}

let renameFile = ()  => {
    fs.rename('hello.text', 'newHello.txt', (err) => {
        if(err){
            throw err;
        }
        console.log('File renamed');
    })
}



//readAndAppendFile();
//readAndWriteFile();
//deleteFile();
renameFile();
