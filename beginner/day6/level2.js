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

// Problem3
// 数値なので文字列より楽かも
// 数値→文字列のキャストが必要