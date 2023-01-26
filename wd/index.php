<?php
// 设置cookie有效期为1天
$cookie_expire_time = time() + (1 * 24 * 60 * 60);
// 设置密码
$password = '万达永辉';

$login = '';


$url='http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"];
// 判断是否有cookie
if (isset($_COOKIE['password']) && $_COOKIE['password'] == $password) {
    // 如果有cookie，则显示html页面
    require 'wdwdwd.html';

} else {
    // 如果没有cookie，则显示输入密码的表单
    require 'login.html';

    // 判断是否有提交密码
    if (isset($_POST['password']) && $_POST['password'] == $password) {
        // 如果有提交密码，则设置cookie
        setcookie('password', $password, $cookie_expire_time);
        // 并跳转到当前页面
        header('Location: '. $url);
    }
}
?>
