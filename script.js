document.addEventListener("DOMContentLoaded",function(){
    const signin=document.querySelector(".sign-in");
    const signup=document.querySelector(".sign-up");
    const login=document.querySelector(".loginpage");
    const reg=document.querySelector(".regpage");
    const alogin=document.getElementById("alogin");
    const areg=document.getElementById("areg");
    const userlabel=document.querySelector(".userlabel");
    const inp=document.querySelector(".username input");
    const nav2=document.querySelector(".nav-resp");
    const menu=document.querySelector(".nav-menu");
    const page=document.querySelector(".page")

    signin.addEventListener("click",function(event){
        login.classList.remove("hidden");
        reg.classList.add("hidden");
    });
    signup.addEventListener("click",function(event) {
        reg.classList.remove("hidden");
        login.classList.add("hidden");
    });

    alogin.addEventListener("click",function(event){
        login.classList.remove("hidden");
        reg.classList.add("hidden");
    });
    areg.addEventListener("click",function(event) {
        reg.classList.remove("hidden");
        login.classList.add("hidden");
    });
    menu.addEventListener("click",function(event) {
        nav2.classList.toggle("hidden-screen");
        page.classList.toggle("hidden");
        
    });
   
    


    



});
