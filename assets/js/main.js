let counter = (function () {
    let count = 0;  
    return function (n) {
      count = n === undefined ? count : n;  
    return count++;
    };
}
());
let counting = (function () {
    let count = 0;  
    return {
      value(num) {
        if (num !== undefined) count = num;  
        return count;
      },
      decrement() {
        count--;
      },
      increment() {
        count++;
      }
    };
}
());
console.log(counting.value());
counting.increment();
console.log(counting.value());

let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
  let pow = (x, n) => {
    if (n !== 1) return x *= pow(x, n - 1);
    return x;};
  return callback(a, b, pow(a, b));
};
myPow (3, 4, myPrint);


function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let yearNow = new Date().getFullYear();
let car = {
  engine: 3564,
  model: 'Camaro',
  name: 'Chevrolet',
  year: 2012,
  info: fullInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';},
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};
let car2 = {
  engine: 2143,
  model: 'Vito 111 CDI',
  name: 'Mercedes-Benz',
  year: 2014,
  info: fullInfo,
  get used() {
    return yearNow - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};
let list = [4, 13, 31, 42, 96, 105, 114, 543];
let myMax = (arg) => Math.max.apply(Math, arg);


function myMul(a, b) {
  return a * b;
};
let myDouble = myMul.bind(null, 2);
console.log (myDouble(4));

let myTriple = myMul.bind(null, 3);
console.log(myTriple(4));

let notUniqNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let notUniqStrings = [
  'Alex',
  'Andy',
  'Jhon',
  'Nick',
  'Col',
  'Rosie',
  'Tomas',
  'Nate',
  'Vi',
  'Lizzy'
];

let myUniq = (arr) => {
  let set = new Set();
  arr.forEach((val) => {
    set.add(val);
  });

  return set;
};