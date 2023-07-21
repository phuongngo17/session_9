let a = +prompt("Nhập vào số a");
let b = +prompt("nhập vào số b");
let c = +prompt("nhập vào số c");
if (a < b || a < c) {
    if (b < c) {
        document.write(`max là ${c}`);
    } else {
        document.write(`min là ${a}`);
    }
}