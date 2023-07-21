// kiểm tra năm nhuận
let year = +prompt("nhập vào số năm");
let isLeapYear = true;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            //nhuận
        } else {
            isLeapYear=false
        }
    }
} else {
    isLeafYear = false
}
console.log(isLeapYear? "leapYear":"notLeapYear" ) 