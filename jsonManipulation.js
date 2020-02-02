// const fs = require('fs');
const fr = new FileReader();

download = (content, fileName, contentType) => {
    var a = document.createElement("a");
    var file = new Blob([content], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}



// const wordsJsonObj = require('./russian-words.json');
let wordsJsonObj;
const inputElement = document.getElementById("input");

inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {

    fr.readAsText(this.files[0]);
    fr.onload = e => {

        wordsJsonObj = JSON.parse(e.target.result);
        console.log(wordsJsonObj);
        const obj1 = {};
        //helpers


        for (let i = 0; i < wordsJsonObj.length; i++) {
            obj1[wordsJsonObj[i].length + ''] = []
        }
        for (let i = 0; i < wordsJsonObj.length; i++) {
            obj1[wordsJsonObj[i].length + ''].push(wordsJsonObj[i])
        }
        // console.log(obj1);


        download(JSON.stringify(obj1), "newJson.json", "json")

    };
    // const wordsJsonObj = this.files[0];
    /* now you can work with the file list */


    // write a file to local folder
    // fs.writeFile("newJson.json", JSON.stringify(obj1), (err) => {
    //     if (err) console.error(err)
    // })
}