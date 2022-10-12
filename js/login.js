var NowLogin = false;
$(document).ready(function () {
    console.log(localStorage.UserName);
    console.log(localStorage.NowLogin)
    if (JSON.parse(localStorage.NowLogin)) {
        $("#login").hide()
        $("#welcome").text("歡迎回來" + localStorage.UserName).show()
    } else {
        $("#login").show()
        $("#welcome").hide()
    }
})

var menberList = [{
    account: 'admin',
    password: 'admin',
    username: 'admin',
    phonenum: '0912345678',
    county: '台北市',
    townships: '信義區',
    address: '信義路五段7號'
}, {
    account: 'user',
    password: 'user',
    username: 'User',
    phonenum: '0987654321',
    county: '台北市',
    townships: '信義區',
    address: '信義路五段7號'
},]
var account = document.getElementById("account")
var password = document.getElementById("password")
account.addEventListener("keyup", function () {
    if (account.value == '' || account.value == null) {
        account.style['border'] = '1px red solid'
    } else {
        account.style['border'] = '1px black solid'
    }
})
password.addEventListener("keyup", function () {
    if (password.value == '' || password.value == null) {
        password.style['border'] = '1px red solid'
    } else {
        password.style['border'] = '1px black solid'
    }
})
function login() {
    if (account.value == '' || account.value == null) {
        alert("請輸入帳號");
        account.style['border'] = '1px red solid';
        account.focus();
        return false
    } else if (password.value == '' || password.value == null) {
        alert("請輸入密碼");
        password.style['border'] = '1px red solid';
        password.focus();
        return false
    } else {
        // alert("登入成功");
        for (var i = 0; i < menberList.length; i++) {
            if (account.value == menberList[i].account) {
                // alert("找到帳號" + menberList[i].account)
                if (password.value == menberList[i].password) {
                    alert("登入成功");
                    NowLogin = true;
                    localStorage.setItem("NowLogin", NowLogin)
                    localStorage.setItem("UserName", menberList[i].username)
                    return true;
                } else {
                    alert("密碼錯誤");
                    password.style['border'] = '1px red solid';
                    password.focus();
                    return false
                }
            } else {
                continue
            }
        }
        return false
    }
    // document.location.href = "/";
    NowLogin = true;
    localStorage.setItem("NowLogin", NowLogin)
};

function logout() {
    if (localStorage.getItem('NowLogin')) {
        NowLogin = false;
        localStorage.setItem("NowLogin", NowLogin)
        document.location.href = "/";
    }
}
function register(){
    console.log($("#registerform"))
    
}

// forgetaccount
var forgetaccount = document.getElementById("forgetaccount")
forgetaccount.addEventListener("keyup", function () {
    if (forgetaccount.value == '' || forgetaccount.value == null) {
        forgetaccount.style['border'] = '1px red solid'
    } else {
        forgetaccount.style['border'] = '1px black solid'
    }
})
function forget(){
    if (forgetaccount.value == '' || forgetaccount.value == null) {
        alert("請輸入信箱");
        forgetaccount.style['border'] = '1px red solid';
        forgetaccount.focus();
        return false
    }else{
        alert("已送出")
    }
}