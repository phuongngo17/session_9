let height = parseInt(prompt("nhập chiều cao  (m)"));
let weight = parseInt(prompt("nhập số cân nặng (kg)"));
let bmi = weight / (height * height);
if (bmi < 18.5) {
    document.write("cân nặng thấp");
} else if (bmi < 25) {
    document.write("bình thường")
} else if (bmi < 30) {
    document.write("Tiền béo phì");
} else if (bmi < 35) {
   document.write("Béo phì độ 1");
} else if (bmi < 40) {
  document.write("Béo phì độ 2");
} else {
    document.write("Béo phì độ 3 ");
}


