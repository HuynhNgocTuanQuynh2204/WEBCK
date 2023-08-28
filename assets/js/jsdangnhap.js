function dangky(e) {
  event.preventDefault();
  var email = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var password1 = document.getElementById('password1').value;
  var user = {
    username: email,
    password: password
  }
  if (email === '' || password === ''){
    alert('Vui lòng điền đầy đủ thông tin');
  }else if (password != password1){
    alert('2 mật khẩu bạn nhập không trùng nhau');
  }else {
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert('Đăng kí tài khoản thành công');
    window.location.assign('./dangnhap.html');
  }
  
}

function dangnhap(e){
    event.preventDefault();
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    if (username == '' || password == ''){
      alert('Vui lòng điền đầy đủ thông tin');
    } else if (email == data.username && password == data.password) {
      alert('Đăng nhập thành công');
      window.location.assign('../trangchu.html');
    } else {
      alert('Tài khoản hoặc mật khẩu sai');
    }
  }
