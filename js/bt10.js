let day = +parseInt(prompt("ngày sinh của bạn"));
let month = +parseInt(prompt("tháng sinh của bạn"));

switch (month) {
    case 1: {
        if (day < 20) {
            document.write("Cung Ma ket")
        } else {
            document.write("Cung Bao Binh")
        }
        break;
    }
    case 2: {
        if (day < 19) {
            document.write("Cung Bao Binh")
        } else {
            document.write("Cung Song Ngu")
        }
        break;
    }
    case 3: {
        if (day < 21) {
            document.write("Cung Song Ngu")
        } else {
            document.write("Cung Bach Duong")
        }
        break;
    }
    case 4: {
        if (day < 20) {
            document.write("Cung Bach Duong")
        } else {
            document.write("Cung Kim Nguu")
        }
        break;
    }
    case 5: {
        if (day < 21) {
            document.write("Cung Kim Nguu")
        } else {
            document.write("Cung Song Tu")
        }
        break;
    }
    case 6: {
        if (day < 22) {
            document.write("Cung Song Tu")
        } else {
            document.write("Cung Cu Giai")
        }
        break;
    }
    case 7: {
        if (day < 23) {
            document.write("Cung Cu Giai")
        } else {
            document.write("Cung Su Tu")
        }
        break;
    }
    case 8: {
        if (day < 23) {
            document.write("Cung Su Tu")
        } else {
            document.write("Cung Xu Nu")
        }
        break;
    }
    case 9: {
        if (day < 23) {
            document.write("cung Xu Nu")
        } else {
            document.write("cung Thien Binh")
        }
        break;
    }
    case 10: {
        if (day < 24) {
            document.write("Cung Thien Binh")
        } else {
            document.write("Cung Ho Cap")
        }
        break;
    }
    case 11: {
        if (day < 22) {
            document.write("Cung Ho Cap")
        } else {
            document.write("Cung Nhan Ma")
        }
        break;
    }
        
}