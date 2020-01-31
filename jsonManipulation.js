// import the json file
// import jsonObj from "./jsonManipulation.json"


const fs = require('fs');
const wordsJsonObj = require('./russian-words.json')

// helper functions
checkArrElementSLength = (arr) => {
    arr.map((el) => {
        return el.length
    })
}

// sort the file buy length 

const sortedJson = wordsJsonObj.sort((a, b) => {
    return a.length - b.length
});

// cerate new arr and order it by length

const jsonToArr = JSON.stringify(sortedJson).split(',');
let newArr = [];
for (let i = 1; i < 50; i++) {
    newArr.push([]);
}
jsonToArr.forEach(el => {
    newArr[el.length].push(el);
})

// arr to obj

let obj = newArr.reduce((acc, el) => {
    acc[el.length] = el;
    return acc;
});

console.log(obj);





// write a file to local folder
// fs.writeFile("newJson.json", sortedJson, (err) => {
//     if (err) console.error(err)
// })