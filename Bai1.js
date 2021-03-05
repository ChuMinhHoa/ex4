let day1=prompt("nhap day thu nhat:")
let day2=prompt("nhap day thu hai:")

let mang1=day1.split(",")
let mang2=day2.split(",")

let _mangNoi=mang1.concat(mang2)

_mangNoi=_mangNoi.sort((a,b)=>{
    return a-b
})

console.log(_mangNoi)

