export function checkLimit(cash, exp, newVal){
    let cashVal = Number(cash)
    let expval = Number(exp)
    let newVale = Number(newVal) 
    let add = expval + newVale
    if(cash > add){

        return true
    }else {
 
        return false
    }

}

