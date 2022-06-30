// Validate Email
function checkEmail() {
  // Biểu thức chính quy RegExp  
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // cấu trúc 1 email thông thường
    // Dùng test() để check xem trong giá trị của email có chuỗi khớp với mô hình biểu thức chính quy hay không
    if (!filter.test(email.value)) {
    return true;
  }
}
// Tạo các biến lưu các giá trị của các Elements
const submitForm = () => {
  const ho = document.getElementById("ho").value;
  const ten = document.getElementById("ten").value;
  const email = document.getElementById("email").value;
  const matkhau = document.getElementById("matkhau").value;
  const nhaplaimatkhau = document.getElementById("nhaplaimatkhau").value;
  const namsinh = document.getElementById("namsinh").value;
  const thanhpho = document.getElementById("thanhpho").value;
  // Xử lý các sự kiện
  if (
    ho === "" ||
    ten === "" ||
    email === "" ||
    matkhau === "" ||
    nhaplaimatkhau === "" ||
    namsinh === "" ||
    thanhpho === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else if (matkhau !== nhaplaimatkhau) {
    alert("Mật khẩu không khớp");
  } else if (!(matkhau.length >= 6)) {
    alert("Mật khẩu tối thiểu 6 kí tự");
  } else if(!(ho.length >=2 && ho.length < 30)) {
    alert('Vui lòng nhập họ có từ 2 - 30 kí tự')
  }
   else if (checkEmail()) {
    alert("Hãy nhập địa chỉ email hợp lệ");
  } else {
    alert("Đăng ký thành công");
  }
// Gọi hàm bằng sự kiện onClick() ở button.  
};

