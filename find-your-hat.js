const prompt = require('prompt-sync')({sigint: true});
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
var stream = require('stream');

var events = require('events');
var eventEmitter = new events.EventEmitter();
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function insert(str, index, value) {
    return str.substring(0, index) + value + str.substring(index+1);
}
  let xAxis = 0;
  let yAxis = 4
  let xChar = 0;
class Field {
    constructor(array1) {
      this.array = array1;
      this.array2 = [];
      this.baseText = ''
}
createField(){
    let x = [].concat(...this.array);
    function fielder (){
      let row = [];
    for (let i = 0;i<x.length;i++){
      let a = Math.floor(Math.random()*x.length);
        for(let j =0; j<5;j++){
          if(x[a]==='*'){
            row.push('░')
          }
          else if(x[a]==='^'){
            row.push('░')
          }
          else{
            row.push(x[a])
          }
        }
    }
    return row.join('')
    }
for (let i =0;i<15;i++){
    this.array2.push(fielder().toString()+'\n');
}
let newArray = this.array2.join('');
return newArray.replace(newArray.charAt(0), '*')
}
 fieldReturner(){
  let a = this.createField();
  let x = Math.floor(Math.random()*a.length)
 return insert(a, x, "^")
}
 returner(){
 this.baseText = this.fieldReturner()
}
ask(question){
  let a = this.baseText
    readline.cursorTo(process.stdout, 0,20);
    rl.question(question, (answer) => {
        if(answer === "q") {
            process.exit(1)
        }
 else if (answer==='r'){
      xAxis += 1;
      xChar += 1;
      switch(a.charAt(xChar)){
        case '░':
              readline.cursorTo(process.stdout, xAxis,yAxis);
              console.log('*');
              break
        case '^':
              console.log('Congrats you found your hat!');
              process.exit(1);
              break
        case 'O':
              console.log('Sorry you fell in a hole. Try again');
              process.exit(1);
              break
        default:
              console.log('Oooops you went out of bound!');
              process.exit(1)
      }
  }
   else if (answer==='d'){
      yAxis += 1;
      xChar += 46;
      switch(a.charAt(xChar)){
        case '░':
              readline.cursorTo(process.stdout, xAxis,yAxis);
              console.log('*');
              break
        case '^':
              console.log('Congrats you found your hat!');
              process.exit(1);
              break
        case 'O':
              console.log('Sorry you fell down a hole');
              process.exit(1);
              break
        default:
              console.log('Oooops you fell out of bound');
              process.exit(1)
      }
  }
   else if (answer==='u'){
      yAxis -= 1;
      xChar -= 46;
      switch(a.charAt(xChar)){
        case '░':
              readline.cursorTo(process.stdout, xAxis,yAxis);
              console.log('*');
              break
        case '^':
              console.log('Congrats you found your hat!');
              process.exit(1);
              break
        case 'O':
              console.log('Sorry you fell down a hole');
              process.exit(1);
              break
        default:
              console.log('Oooops you fell out of bound');
              process.exit(1)
      }
  }
   else if (answer==='l'){
      xAxis -= 1;
      xChar -= 1;
      switch(a.charAt(xChar)){
        case '░':
              readline.cursorTo(process.stdout, xAxis,yAxis);
              console.log('*');
              break
        case '^':
              console.log('Congrats you found your hat!');
              process.exit(1);
              break
        case 'O':
              console.log('Sorry you fell down a hole');
              process.exit(1);
              break
        default:
              console.log('Oooops you fell out of bound');
              process.exit(1)
      }
  }
  else{
    console.log('Wrong key entered');
    process.exit(1)
  }
 this.ask(question)
    })
}
 print() {
  this.returner()
  console.log(this.baseText)
  this.ask('Which way? (U,D,L,R) then \'ENTER\'     ')

}

}
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);


myField.print();

