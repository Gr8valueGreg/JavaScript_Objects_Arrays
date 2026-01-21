console.log("Hello World!\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];


function arraySum(arr) {
    let sum = 0;

    arr.forEach((number) => {
        sum += number;
    });

    return sum;
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

console.log("EXERCISE 1:\n==========\n");



let favBook = {};

favBook.title = "Prince Caspian";
favBook.author = "C.S. Lewis";
favBook.pageCount = 250;
favBook.readCount = 1;

console.log(favBook);

function info() {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
};

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pageCount: 295,
    readCount: 2,
    info,
};

console.log(favBook2.info());



console.log("EXERCISE 2:\n==========\n");


let sentence = "The quick brown fox jumps over the lazy dog";


function reverseWords(sentence) {

   let words = sentence.split(" ");
   
   let result = words.map((word) => {
    let letters = word.split("");
    letters.reverse();
    return letters.join("");
   })

   return result.join(" ");
}

console.log (reverseWords(sentence));
console.log (reverseWords("What is up everyone"));
console.log (reverseWords("Did this actually work?"))

reverseWords(sentence);



console.log("EXERCISE 3:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    
    let headers = data.slice(0, data.indexOf("\n")).split(",");

    let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

    const output = valuesList.map((row) => {
        let values = row.split(",");
        let obj ={}

        values.forEach((value, idx) => {
            if (idx < headers.length) {
                obj[headers[idx]] = value;
            } else {
                obj[`misc${idx - headers.length + 1}`] = value;
            }
        });

        return obj;
    });

    return output;
}

    console.log(csvConverter(csvData))


    function converter(fileData) {
        
        let rows = fileData.split("\n");
       
        let headers = rows[0].split(",");

        let result = []
        for (let i = 1; i < rows.length; i++) {
        let obj = {};
        let data = rows[i].split(",");
        data.forEach((val, idx) => {
                obj[headers[idx]] = val;
            });
            result.push(obj);
        }
        return result;
    }

    console.log(converter(csvData));


    function reduceConvert(fileData) {
        
        return fileData.split("\n").reduce((output, row, index, arr) => {

            let values = row.split(",")

            if (index == 0) {
                output.headers = values;
            } else{
                let obj = {};
                values.forEach((val, index) => {
                    if (index < output.headers.length) {
                        obj[output.headers[index]] = val;
                    } else {
                        obj[`misc${index - output.headers.length + 1}`] = val;
                    }
                });
                if (!output.records) {
                    output.records = [];
                }
                output.records.push(obj);
            }

            return output;
        }, {}).records;
    }

    console.log(reduceConvert(csvData));

console.log("EXERCISE 4:\n==========\n");