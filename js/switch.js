
//so sánh bằng switch case

// let choice = +prompt("nhập vào 1 số bất kì");

// switch (choice) {
//     case 0:
//         // khối code thực thi
//         document.write("số không");
//         break;
//     case 1:
//         // khối code thực thi
//         document.write("số một");
//         break;
//     case 2:
//         // khối code thực thi
//         document.write("số hai");
//         break;
//     case 3:
//         // khối code thực thi
//         document.write("số ba");
//         break;
//     case 4:
//         // khối code thực thi
//         document.write("số bốn");
//         break;
//     case 5:
//         // khối code thực thi
//         document.write("số năm");
//         break;
//     case 6:
//         // khối code thực thi
//         document.write("số sáu");
//         break;
//     case 7:
//         // khối code thực thi
//         document.write("số bảy");
//         break;
//     case 8:
//         // khối code thực thi
//         document.write("số tám");
//         break;
//     case 9:
//         // khối code thực thi
//         document.write("số chín");
//         break;
//     default:
//         document.write("không hợp lệ")
// }

//đếm số ngày trong 1 tháng
let month = +prompt("nhập số tháng")
switch (month) {
    case 1:
        document.write(`Tháng ${month} có 31 ngày`);
        break;
    case 2:
        document.write(`Tháng ${month} có 28 ngày`);
        break;
    case 3:
        document.write(`Tháng ${month} có 31 ngày`);
        break;
    case 4:
        document.write(`Tháng ${month} có 30 ngày`);
        break;
    case 5:
        document.write(`Tháng ${month} có 31 ngày`);
        break;
    case 5:
        document.write(`Tháng ${month} có 31 ngày`);
        break;
    case 6:
        document.write(`Tháng ${month} có 30 ngày`);
        break;
    case 7:
        document.write(`Tháng ${month} có 31 ngày`);
        break;
    case 8:
        document.write(`Tháng ${month} có 31 ngày`);
        break;
    case 9:
        document.write(`Tháng ${month} có 30 ngày`);
        break;
    case 10:
        document.write(`Tháng ${month} có 31 ngày`);
        break;
    case 11:
        document.write(`Tháng ${month} có 30 ngày`);
        break;
    case 12:
        document.write(`Tháng ${month} có 31 ngày`);
        break;
    default:
        console.warn("nhập không hợp lệ");
}