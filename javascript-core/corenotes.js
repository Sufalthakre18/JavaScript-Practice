
function score(...val){
    let sum=0
    val.forEach(function(val){
        sum+=val
    })
    return sum;
}
console.log(score(2,4,5,6,2,4))