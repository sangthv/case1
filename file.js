const imgPosition=document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer=document.querySelectorAll('.aspect-ratio-169');
const dotItem= document.querySelectorAll(".dot");
let imgNumber= imgPosition.length;
let index=0;
imgPosition.forEach(function (image,index){
    image.style.left= index*100 + "%";
    dotItem[index].addEventListener("click", function () {
        slider(index);
    })
})
function imgSlide(){
    index++;
    if(index>=imgNumber){index=0}
    slider(index);
}
function slider(index){
    let imgContainers=document.getElementsByClassName("aspect-ratio-169")[0];
    let imgs = imgContainers.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
        if (i === index) {
            let a = "0%";
            imgs[i].style.left = a;
        }
        else  {
            let a = "-" +(i%imgNumber*100)+ "%";
            imgs[i].style.left = a;
        }
    }
    const dotActive=document.querySelector('.active');
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlide,3000)

//////////////dang nhap///////////////////////////////
var inputUsername=document.getElementById("username");
var inputPassword=document.getElementById("password");
var formLogin=document.getElementById("form-login");
if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit)
}else {
    formLogin.addEventListener('submit', onFormSubmit)
}
function onFormSubmit(){
    var inputUsername=document.getElementById("username");
    var inputPassword=document.getElementById("password");
    var username=inputUsername.value;
    var password=inputPassword.value;
    if (username==='admin' && password==='123'){
        alert("đăng nhập thành công");
    } else {
        alert("đăng nhập thất bại")
    }
}
