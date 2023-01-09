
var NowLogin = false;
var menberList = [{
    account: 'admin',
    password: 'admin',
    username: 'admin',
    phonenum: '0912345678',
    county: '台北市',
    address: '信義路五段7號'
}, {
    account: 'user',
    password: 'user',
    username: 'User',
    phonenum: '0987654321',
    county: '台北市',
    address: '信義路五段7號'
},]
var getmenberlist = "";
$(document).ready(function () {
    // var menstr = JSON.stringify(menberList)
    // localStorage.setItem("menberList", menstr)
    // getmenberlist = JSON.parse(localStorage.menberList)
    console.log(localStorage.UserName);
    console.log(localStorage.NowLogin);
    if (JSON.parse(localStorage.NowLogin)) {
        $("#login").hide()
        $("#welcome").text("歡迎回來" + localStorage.UserName).show()
    } else {
        $("#login").show()
        $("#welcome").hide()
    }
})


var account = document.getElementById("account")
var password = document.getElementById("password")
var NowLogin = JSON.parse(localStorage.getItem('NowLogin'));
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
    var someaccont = menberList.some(function (item, index, array) {
        return item.account == account.value;
    })
    var findaccont = menberList.find(function (item, index, array) {
        return item.account == account.value;
    })
    if (getmenberlist == 0) {
        if (account.value == '' || account.value == null) {
            alert("請輸入帳號");
            account.style['border'] = '1px red solid';
            account.focus();
        } else if (password.value == '' || password.value == null) {
            alert("請輸入密碼");
            password.style['border'] = '1px red solid';
            password.focus();
        } else if (someaccont) {
            if (password.value == findaccont.password) {
                alert("登入成功");
                NowLogin = true;
                localStorage.setItem("NowLogin", NowLogin)
                localStorage.setItem("UserName", findaccont.username)
                // document.location.href="/"
                location.reload()
            }
            else {  
                alert("密碼錯誤");
                password.style['border'] = '1px red solid';
                password.focus();
            }
        } else { alert("查無此帳號")}
    } else {
        if (account.value == '' || account.value == null) {
            alert("請輸入帳號");
            account.style['border'] = '1px red solid';
            account.focus();
        } else if (password.value == '' || password.value == null) {
            alert("請輸入密碼");
            password.style['border'] = '1px red solid';
            password.focus();
        } else {
            // alert("登入成功");
            for (var i = 0; i < menberList.length; i++) {
                if (account.value == getmenberlist[i].account) {
                    // alert("找到帳號" + menberList[i].account)
                    if (password.value == getmenberlist[i].password) {
                        alert("登入成功");
                        NowLogin = true;
                        localStorage.setItem("NowLogin", NowLogin)
                        localStorage.setItem("UserName", getmenberlist[i].username)
                        // document.location.href="/"
                        location.reload()
                    } else {
                        alert("密碼錯誤");
                        password.style['border'] = '1px red solid';
                        password.focus();
                    }
                } else {
                    account.style['border'] = '1px red solid';
                    continue
                }
            }
            return false
        }
    }

}
// function login() {
//     if (account.value == '' || account.value == null) {
//         alert("請輸入帳號");
//         account.style['border'] = '1px red solid';
//         account.focus();
//         return false
//     } else if (password.value == '' || password.value == null) {
//         alert("請輸入密碼");
//         password.style['border'] = '1px red solid';
//         password.focus();
//         return false
//     } else {
//         // alert("登入成功");
//         for (var i = 0; i < menberList.length; i++) {
//             if (account.value == getmenberlist[i].account) {
//                 // alert("找到帳號" + menberList[i].account)
//                 if (password.value == getmenberlist[i].password) {
//                     alert("登入成功");
//                     NowLogin = true;
//                     localStorage.setItem("NowLogin", NowLogin)
//                     localStorage.setItem("UserName", getmenberlist[i].username)
//                     // document.location.href="/"
//                     location.reload()
//                     return true;
//                 } else {
//                     alert("密碼錯誤");
//                     password.style['border'] = '1px red solid';
//                     password.focus();
//                     return false
//                 }
//             } else {
//                 account.style['border'] = '1px red solid';
//                 continue
//             }
//         }
//         return false
//     }
// };
// function login() {
//     if (account.value == '' || account.value == null) {
//         alert("請輸入帳號");
//         account.style['border'] = '1px red solid';
//         account.focus();
//         return false
//     } else if (password.value == '' || password.value == null) {
//         alert("請輸入密碼");
//         password.style['border'] = '1px red solid';
//         password.focus();
//         return false
//     } else {
//         // alert("登入成功");
//         for (var i = 0; i < menberList.length; i++) {
//             if (account.value == menberList[i].account) {
//                 // alert("找到帳號" + menberList[i].account)
//                 if (password.value == menberList[i].password) {
//                     alert("登入成功");
//                     NowLogin = true;
//                     localStorage.setItem("NowLogin", NowLogin)
//                     localStorage.setItem("UserName", menberList[i].username)
//                     // document.location.href="/"
//                     location.reload()
//                     return true;
//                 } else {
//                     alert("密碼錯誤");
//                     password.style['border'] = '1px red solid';
//                     password.focus();
//                     return false
//                 }
//             } else {
//                 account.style['border'] = '1px red solid';
//                 continue
//             }
//         }
//         return false
//     }
// };

document.getElementById("btn-close").addEventListener("click", function () {

    account.value = "";
    password.value = "";
})

function logout() {
    if (NowLogin) {
        NowLogin = false;
        localStorage.setItem("NowLogin", NowLogin);
        localStorage.removeItem("UserName");
        // document.location.href = "/";
        // location.reload()
        history.back()
    }
}

// forgetaccount
var forgetaccount = document.getElementById("forgetaccount")
var emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
// 監聽輸入時欄位的值是否為空，改變欄位樣式
forgetaccount.addEventListener("keyup", function () {
    if (forgetaccount.value == '') {
        forgetaccount.style['border'] = '1px red solid'
    } else {
        forgetaccount.style['border'] = '1px black solid'
    }
})
function forget() {
    if (forgetaccount.value == '') {
        alert("請輸入信箱");
        forgetaccount.style['border'] = '1px red solid';
        forgetaccount.focus();
        return false
    } else if (emailRegxp.test(forgetaccount.value) != true) {
        alert('電子信箱格式錯誤');
        forgetaccount.style['border'] = '1px red solid';
        forgetaccount.focus();
        forgetaccount.value = "";
        return false;
    } else {
        alert("已送出")
        forgetaccount.value = ""
    }
}
function gomenber() {
    if (JSON.parse(localStorage.NowLogin)) {
        document.location.href = "menber.html"
    } else {
        alert("請先登入")
    }
}



$("#registeraccount").on("keyup ", function () {
    if ($("#registeraccount").val() == '') {
        $("#registeraccount").css("border", "1px solid red");
    } else {
        $("#registeraccount").css("border", "1px solid black");
    }
})
$("#registerpassword").on("keyup ", function () {
    if ($("#registerpassword").val() == '') {
        $("#registerpassword").css("border", "1px solid red");
    } else {
        $("#registerpassword").css("border", "1px solid black");
    }
})
$("#username").on("keyup ", function () {
    if ($("#username").val() == '') {
        $("#username").css("border", "1px solid red");
    } else {
        $("#username").css("border", "1px solid black");
    }
})


function register() {
    if ($("#registeraccount").val() == '') {
        alert("請輸入帳號");
        $("#registeraccount").css("border", "1px solid red");
        $("#registeraccount").focus()
    } else if ($("#registerpassword").val() == '') {
        alert('重新輸入密碼');
        $("#registerpassword").css("border", "1px solid red");
        $("#registerpassword").focus()
    } else if ($("#username").val() == '') {
        $("#username").css("border", "1px solid red");
        $("#username").focus()
    } else {
        menberList.push({
            account: $("#registeraccount").val(),
            password: $("#registerpassword").val(),
            username: $("#username").val(),
            phonenum: '',
            county: '',
            address: ''
        });
        var menstr = JSON.stringify(menberList)
        localStorage.setItem("menberList", menstr)
        getmenberlist = JSON.parse(localStorage.menberList)
        alert("註冊完成，請關閉視窗進行登入")
        $("#registeraccount").val() = '';
        $("#registerpassword").val() = '';
        $("#username").val() = '';
    }
}
