// TODO: Problem15
// 一定範囲で数字を出してそれを文字(アスキー)化かな
// https://pisuke-code.com/js-create-non-overlap-randoms/
// 難しい… 数値と小英字の組み合わせがランダムで掛ける物か
// https://www.agent-grow.com/self20percent/2018/07/02/random-text-gen/
// 分かったこと->配列を数値＋英字・小文字で作成しそれをランダムで出すか↑なら出来そう
let asciidic="0123456789abcdefghijklmnopqrstuvwxyz"
// console.log(asciidic.charAt(11))
var ans15=""
for(let j=0;j<6;j++){
    ans15 = ans15 + asciidic.charAt(Math.floor(Math.random()*35))
}
console.log(ans15)
