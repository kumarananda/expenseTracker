export function checkLimit(cash, exp, newVal=0){
    let cashVal = Number(cash)
    let expval = Number(exp)
    let newVale = Number(newVal) 
    let add = expval + newVale
    if(cashVal > add){

        return true
    }else {
 
        return false
    }

}

