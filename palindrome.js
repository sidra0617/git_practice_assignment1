

function checkPalindrome(str) {
    let bag = ""
    for (let i = str.length - 1; i >= 0; i--) {
        bag+=str[i]
    }
    return bag;

}
let rev_str = checkPalindrome("mom")
if(rev_str == str){
    console.log("is palindrome")
}else {
    console.log("Not palindrome")
}