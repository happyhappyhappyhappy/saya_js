// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/06_Day_Loops/06_day_loops.md#exercises-level-2


let asciidic="0123456789abcdefghijklmnopqrstuvwxyz"
// console.log(asciidic.charAt(11))
var ans16=""
// ランダム文字列とあるが一応8文字以降108文字まで出せるようにする
var length=Math.floor(Math.random()*100)+8
for(let j=0;j<length;j++){
    ans16 = ans16 + asciidic.charAt(Math.floor(Math.random()*35))
}
console.log(ans16)

// Problem2
// 面倒なのでランダム文字列の縮小版にする
let asciidic2="0123456789abcdef"
var ans2="#"
for(let j=0;j<6;j++){
    ans2=ans2+asciidic2.charAt(Math.floor(Math.random()*15))
}
console.log(ans2)

// Problem2 別解
// Numberオブジェクトを使う

// Problem3
// 数値なので文字列より楽かも
// 数値→文字列のキャストが必要
console.log("2-3")
var ans3="rgb("
for(let j=0;j<3;j++){
    ans3=ans3+String(Math.floor(Math.random()*256))
    if(j!=2){
        ans3 = ans3 + ","
    }
    else{
        ans3=ans3+")"
    }
}
console.log(ans3)

// Problem4
// problem4d=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

var answer4d=[]
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
var answers4d=[]
for(let j=0;j<countries.length;j++){
    answer4d.push(countries[j])
}
console.log(answer4d) 

// Problem5
var answer5d=[]
for(let j=0;j<countries.length;j++){
    answer5d.push(countries[j].length)
}
console.log(answer5d)

// Problem6
var answer6d=[]
for(let j=0;j<countries.length;j=j+1){
    var eachCountry=[]
    eachCountry.push(countries[j])
    eachCountry.push(countries[j].substring(0,3).toUpperCase())
    eachCountry.push(countries[j].length)
    answer6d.push(eachCountry)
}
console.log(answer6d)

// Problem7
var answer7=[]
for(let j=0;j<countries.length;j++){
    if(countries[j].endsWith("land")){
        answer7.push(countries[j])
    }
}
console.log(answer7)

// Problem8
var longCountry=0
for(let j=1;j<countries.length;j++){
    if(countries[j].length > countries[longCountry].length){
        longCountry = j
    }
}
console.log(countries[longCountry])

// Problem8
// iaを含む文字列を列挙
var  answer8 = []
for(let j=0;j<countries.length;j++){
    if(countries[j].includes("ia")){
        answer8.push(countries[j])
    }
}
console.log(answer8)
