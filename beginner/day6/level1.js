// テストデータ

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Problem4
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/06_Day_Loops/06_day_loops.md#exercises-level-1
// 参考
// https://qiita.com/takeharu/items/d75f96f81ff83680013f 
// https://www.javadrive.jp/javascript/ope/index16.html
  for(let j=1;j<=7;j++){
    var output=""
    for(let k=1;k<=j;k++){
      output = output + "#"
    }
    console.log(output)
  }

// Problem5
for(let j=0;j<=10;j++){
  console.log(`${j} x ${j} = ${j*j}`)
}
// Problem6
console.log("i\ti^2\ti^3")
for(let j=1;j<=10;j++){
  console.log(`${j}\t${j * j}\t${j * j * j}`)
}
// Problem7
for(let j=0;j<=100;j++){
  if( j % 2 == 0){
    console.log(j);
  }
}
// Problem8
for(let j=0;j<=100;j++){
  if( j % 2 == 1){
    console.log(j);
  }
}
// Problem9 
// base
var furui=[]
for(let j=0;j<=100;j++){
  furui.push(true);
}
furui[0] = false
furui[1] = false
furui[2] = true
// ふるいの実装
// https://note.com/strictlyes/n/na49084dbf944

for(let j=2;j<=Math.sqrt(100);j++){
  for(let k=2;j*k <= 100;k++){
    furui[j*k] = false;
  }
}

for(let j=0;j<=100;j++){
  if(furui[j] == true){
    console.log(j);
  }
}
// Problem10
var sum1=0
for(let j=0;j<=100;j++){
  sum1 = sum1 + j;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum1}.`)
// Problem11
var sum2even=0
var sum2odd=0
for(let j=0;j<=100;j++){
  if(j % 2 == 1){
    sum2odd = sum2odd + j
  }
  else{
    sum2even = sum2even + j
  }
}
console.log(`The sum of all evens from 0 to 100 is ${sum2even}. 
And the sum of all odds from 0 to 100 is ${sum2odd}.`)
// Problem12
var evenodd=[]
evenodd.push(sum2even)
evenodd.push(sum2odd)
console.log(evenodd)

// Problem13
// https://qiita.com/sho-17/items/4a89f13e13fa9dcc250a
var randomArr=[]
for(let j=0;j<5;j++){
  randomArr.push(Math.floor(Math.random()*6))
}
console.log(randomArr)

// Problem14
var randomArrUniq=[]
var no_double=5
while(no_double > 0){
  let value=Math.floor(Math.random()*6)
  if(randomArrUniq.indexOf(value) == -1){
    randomArrUniq.push(value)
    no_double=no_double-1
  }
}
console.log(randomArrUniq)
// 短いとはいえないなぁ

// TODO: Problem15
// 一定範囲で数字を出してそれを文字(アスキー)化かな
// https://pisuke-code.com/js-create-non-overlap-randoms/


