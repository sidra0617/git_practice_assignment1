function checkPrime(num) {
    let factors =0
    for (let i=1; i<= num; i++) {
        if (num % i == 1) {
            factors++
        }
    }
    if (factors == 2) {
        console.log("prime Number")
    } else {
        console.log("not prime Number")
    }
}