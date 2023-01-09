$(document).ready(
    $("#back").delay(300).fadeOut(500),
    // $("#back").delay(1500).remove("#back"),
    $("#header").html(`<div class="container">
<h1><a class="navbar-brand" href="index.html"><img src="./img/LOGO.png" alt=""></a></h1>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link" href="about.html">關於我們</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">最新消息</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                產品介紹
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="product.html">精選冰品</a></li>
                <li><a class="dropdown-item" href="product.html">享受下午茶</a></li>
                <li><a class="dropdown-item" href="product.html">高雅甜點</a></li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="connection.html">聯絡我們</a>
        </li>
        <li class="nav-item" >
            <a class="nav-link" href="javascript:void(0)" onclick="openMenberSide()"><i class="fa-solid fa-user"></i></a>
        </li>
        <li class="nav-item dropdown"style="display:none;">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <div class="dropdown-menu cart-menu" id="cart-menu">
            
            </div>
        </li>
    </ul>
</div>
</div>`),
    $("#banner").html(`<div class="page-banner" style="height:300px;">
<div></div>
</div>`),
    $("#footer").html(`<div class="container">
<div class="row justify-content-between ">
    <div class="col-3 footer-info px-5 ">
        <h3 class="text-light">Information</h3>
        <ul class="p-0 text-light ">
            <li><i class="fa-solid fa-house"></i>0124, Munnawali Street
                Sydney, AU 302012</li>
            <li><i class="fa-solid fa-phone"></i>0141-430-3949</li>
            <li><i class="fa-solid fa-fax"></i>0141-123-4567</li>
            <li><i class="fa-regular fa-envelope"></i><a href="">support@gmail.com</a></li>
        </ul>
    </div>
    <div class="col-6 footer-center px-5 text-center">
        <img src="./img/LOGO.png" alt="">
        <p class="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
            pariatur nihil
            voluptate vero impedit repudiandae iure, repellendus beatae harum amet expedita quasi eius
           .</p>
    </div>
    <div class="col-3 footer-link px-5">
        <h3 class="text-light">Link</h3>
        <ul class="p-0">
            <li><a href="index.html"><i class="fa-regular fa-circle"></i> Home</a></li>
            <li><a href="about.html"><i class="fa-regular fa-circle"></i> About Us</a></li>
            <li><a href="news.html"><i class="fa-regular fa-circle"></i> News</a></li>
            <li><a href="product.html"><i class="fa-regular fa-circle"></i> Product</a></li>
            <li><a href="connection.html"><i class="fa-regular fa-circle"></i> Contact</a></li>
        </ul>
    </div>
</div>
</div>`))
$("#menber-layout").html(`<div id="menber-component">
<div id="MenberSide" class="menberSide">
    <a href="javascript:void(0)" class="closebtn" onclick="closeMenberSide()">&times;</a>
    <a href="javascript:void(0)" class="" data-bs-toggle="modal" data-bs-target="#LoginModal"
        id="login">登入</a>
    <p style="display:none;padding: 8px 8px 8px 32px;font-size: 25px;color: white;" id="welcome"></p>
    <a href="javascript:void(0)" onclick="gomenber()">會員專區</a>
    <a href="javascript:void(0)" onclick="logout()">登出</a>
</div>
<div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content ">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">會員登入</h5>
                <button type="button" class="btn-close" id="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" class="px-5" id="loginform"  method="">
                    <div>
                        <label for="account">會員帳號*</label><br>
                        <input type="text"  id="account" style="width:100% ;"
                            placeholder="請輸入帳號">
                    </div>
                    <div class="py-3">
                        <label for="password">會員密碼*</label><br>
                        <input type="password"  id="password" style="width:100% ;"
                            placeholder="請輸入密碼">
                    </div>
                    <div class="text-center">
                        <button type="button" class="loginSubmit" id="loginSubmit" 
                            onclick="login()">登入</button>
                    </div>
                    <div class="text-center loginLink">
                        <a href="javascript:void(0)" class="" data-bs-toggle="modal"
                            data-bs-target="#registerModal"><i class="fa-solid fa-users"></i>立即註冊</a>
                        <a href="javascript:void(0)" class="" data-bs-toggle="modal"
                            data-bs-target="#forgetModal"><i class="fa-solid fa-question"></i>忘記密碼</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">會員註冊</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" class="px-5" id="registerform">
                    <div>
                        <label for="registeraccount">帳號*</label><br>
                        <input type="text" name="registeraccount" id="registeraccount" style="width:100% ;"
                            placeholder="請輸入帳號" required>
                    </div>
                    <div class="py-2">
                        <label for="registerpassword">密碼*</label><br>
                        <input type="password" name="registerpassword" id="registerpassword"
                            style="width:100% ;" placeholder="請輸入密碼" required>
                    </div>
                    <div class="">
                        <label for="username">姓名*</label><br>
                        <input type="text" name="registername" id="username" style="width:100% ;"
                            placeholder="請輸入全名" required>
                    </div>
                    <div class="text-center registerbtn">
                    <button type="button" class="forgetlogin" data-bs-toggle="modal"
                    data-bs-target="#LoginModal">會員登入</button>
                        <button type="button" class="registerSend" onclick="register()">確認送出</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="forgetModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">忘記密碼</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" class="px-5">
                    <div>
                        <label for="forgetaccount">信箱*</label><br>
                        <input type="text" name="forgetaccount" id="forgetaccount" style="width:100% ;"
                            placeholder="請輸入電子郵件">
                    </div>
                    <div class="text-center forgetbtn">
                        <button type="button" class="forgetlogin" data-bs-toggle="modal"
                            data-bs-target="#LoginModal">會員登入</button>
                        <button type="button" class="forgrtSend" onclick="forget()">送出</button>
                    </div>
                    <div class="text-center forgetLink">
                        <a href="javascript:void(0)" class="" data-bs-toggle="modal"
                            data-bs-target="#registerModal"><i class="fa-solid fa-user-plus"></i>立即註冊</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>`)

// 會員專區側邊攔
function openMenberSide() {
    document.getElementById("MenberSide").style.width = "250px";
}
function closeMenberSide() {
    document.getElementById("MenberSide").style.width = "0";
}