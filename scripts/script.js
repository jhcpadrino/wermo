const images=["images/wermo1.png","images/wermo2.png","images/wermo3.png","images/wermo4.png","images/wermo5.png"]

var slide = document.getElementById("slide");

let i=0;
slideShow()
function slideShow(){

   if(i>=images.length)
   {i=0;}
   
    
    slide.style.height="100%";
    slide.style.width="100%";
    slide.alt="Wermo Images";
    slide.src=images[i];
    
    i++;
   setTimeout(slideShow,5000)
}
