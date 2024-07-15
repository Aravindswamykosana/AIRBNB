let globe=document.querySelector("#globe");
console.log(globe);

globe.addEventListener("click",(e)=>{
    console.log("eee")
    let res=globe.classList.toggle(true);
    let div=document.getElementById("div")
    if(res){
        div.style.display="block";
        div.style.transform="translatey(-100px)"
        div.style.transitionDuration="4s"
    }
    else{
        div.style.display="none";
    }
})

let cross=document.getElementById("cross")

cross.addEventListener("click",()=>{
    let r=cross.classList.toggle(true)
    let div=document.getElementById("div")
    if(r){
        div.style.display="none";
    }
})

let menu=document.querySelector("#menu")
console.log(menu);

menu.addEventListener("click",()=>{
    let res=menu.classList.toggle(true)
    let div1=document.getElementById("div1")
    if(res){
        div1.style.display="block"
    }
    else{
        div1.style.display="none"
    }
})

let country=document.getElementById("country")
console.log(country);

window.fetch("country.json")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    for(let ele of data){
        console.log(ele);
        let opt=`
            <option>${ele.country}</option>
        `
        country.innerHTML+=opt;
    }
})

let signup=document.getElementById("signup")

signup.addEventListener("click",()=>{
    let div2=document.getElementById("div2")
    let div1=document.getElementById("div1")
    let res=signup.classList.toggle(true)
    if(res){
        div2.style.display="block"
        div1.style.display="none"
    }
    else{
        div2.style.display="none"
    }
})

let cross1=document.getElementById("cross1")

cross1.addEventListener("click",()=>{
    let res=cross1.classList.toggle(true)
    let div2=document.getElementById("div2")
    let div1=document.getElementById("div1")
    if(res){
        div2.style.display="none"
        div1.style.display="none"
    }
})

let login=document.querySelector("#login")
login.addEventListener("click",()=>{
    let div2=document.getElementById("div2")
    let div1=document.getElementById("div1")
    let res=signup.classList.toggle(true)
    if(res){
        div2.style.display="block"
        div1.style.display="none"
    }
    else{
        div2.style.display="none"
    }
})