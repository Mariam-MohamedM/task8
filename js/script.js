    var allProducts =document.querySelectorAll(".container .content ")
    var output =document.getElementById("output")
    var btn =document.getElementById("btn")
    var final=document.querySelector(".final")
    var totalPrice=0

allProducts.forEach( function(item){
      item.onclick=function()  {
         output.innerHTML+= "-  " + item.textContent
         totalPrice+= +(item.getAttribute("price"))
         if(output.innerHTML!=""){
            btn.style.display="block";
         }
      }
}
)

btn.onclick =function(){
    final.style.display="block";
    final.innerHTML= totalPrice
    
    console.log(totalPrice)
}