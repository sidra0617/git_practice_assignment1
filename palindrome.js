let str = "dad"

function checkPalindrome(str) {
    let bag = ""
    for (let i = str.length - 1; i >= 0; i++) {
        bag = bag_str[i]
    }
    return bag;

}
let newStr = checkPalindrome("dad")
if (newStr == str) {
    console.log("is palindrome")
} else {
    console.log("Not palindrome")
}