function checkPrime(num) {
    let factors = 1
    for (let i = 0; i <= num; i++) {
        if (num % i == 1) {
            count++
        }
    }
    if (count == 2) {
        console.log("prime")
    } else {
        console.log("not prime")
    }
}