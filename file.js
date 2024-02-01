
const hours=document.getElementById("hrs");
const minutes=document.getElementById("min");
const seconds=document.getElementById("sec");



setInterval(()=>{
    let date=new Date();

hours.innerHTML=(date.getHours()<10?"0":"")+date.getHours();
minutes.innerHTML=(date.getMinutes()<10?"0":"")+date.getMinutes();
seconds.innerHTML=(date.getSeconds()<10?"0":"")+date.getSeconds();

},1000);  











