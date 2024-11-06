//ฟังชั่นต์ ไว้คำนวณค่า
function calculate_Bmi(weight, height) {
    height = height / 100
    let Bmi = (weight / (height*height))
    return Bmi;
}
//ดึงinput
function BMI(value1, value2) {
    if (value1 && value2) {
        let Bmi = calculate_Bmi(value1, value2); //คำนวณ
        document.getElementById("result").innerHTML = Bmi.toFixed(3) + "BMI"; //แสดงผลBMI

        //ตรวจสอบเงื่อนไข
        if (Bmi >= 30.0) {
            document.getElementById("Test_results").innerHTML = "ผลทดสอบ: อ้วนตุ้บเลยนะ";
        } else if (Bmi >= 25.0 && Bmi < 30.0) {
            document.getElementById("Test_results").innerHTML = "ผลทดสอบ: อ้วนอยู่นะ";
        } else if (Bmi >= 18.6 && Bmi < 25.0) {
            document.getElementById("Test_results").innerHTML = "ผลทดสอบ: หล่อเลย";
        } else if (Bmi < 18.6) {
            document.getElementById("Test_results").innerHTML = "ผลทดสอบ: กินข้าวเยอะๆนะ";
        }
    } else {
        document.getElementById("result").innerHTML = "กรุณากรอกน้ำหนักส่วนสูงให้ครบ";
        document.getElementById("Test_results").innerHTML = "กรุณากรอกน้ำหนักส่วนสูงให้ครบ";
    }
}
//SET_ZERO
function resetFields() {
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('result').innerHTML = "ผลลัพธ์ BMI";
    document.getElementById('Test_results').innerHTML = "";
    document.getElementById('Test_results').innerHTML = "ผลทดสอบ";
}