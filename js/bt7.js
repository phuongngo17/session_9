let month = +prompt("mời nhập tháng vào(1/2.../12)");
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