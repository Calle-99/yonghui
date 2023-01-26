var password=""
password=prompt('请输入访问密码:','');
function custom_close()
{undefined
window.opener=null;
window.open('','_self');
window.close();
}
if (password !='德润德润') //设置访问密码
{undefined
custom_close();
//加这一段是为了避免有些浏览器不支持关闭浏览器的JS ,所以请求跳转到一个新页面！
window.location.href='./404';
 //默认调整至上一级
alert("输入正确密码才能访问!")
 //当密码错误时弹窗提示
}