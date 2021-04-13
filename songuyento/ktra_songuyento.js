
let number = +prompt("Nhập vào số lượng các số nguyên tố đầu tiên")
let count = 0
let N = 2
document.getElementById("number").innerHTML = +number+ " số nguyên tố đầu tiên là:"
while (count < number) {
    if (isPrimeNumber(N)) {
        document.getElementById("result").innerHTML += N + " "
        count++;
    }
    N++
}

function isPrimeNumber(num) {
    let check = true
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            check = false;
            break;
        }
    }
    return check
}