// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/07_Day_Functions/07_day_functions.md#exercises-level-1
// sample
function square(){
    let num = 2
    let sq = num * num
    console.log(sq)
}

square()

// 1
function fullname1(){
    let myname="Yamanaka kohji"
    console.log(myname)
}

fullname1()

// 2
function fullname2(){
    let firstname="Yamanaka"
    let lastname="Kohji"
    let full_name=firstname+" "+lastname
    return full_name
}

console.log(fullname2())