let shoppingCart= document.getElementById("shopping_cart")
let label = document.getElementById("label")
let basket = JSON.parse(localStorage.getItem("cart"))|| []


  
function display(){
   console.log(basket)
    document.querySelector(".cart_page").innerHTML=""
  basket.map(function(el,i){
    let x=basket.length
    // document.querySelector("#cnt").innerText=x
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=el.image
    let p1=document.createElement("p")
    p1.innerText=el.name
    let p2=document.createElement("p")    
    p2.innerText= "Rs"+" "+el.price
    let p3=document.createElement("p")
    p3.innerText="Rating :-"+" "+el.rating
    let btn=document.createElement("button")
    btn.innerText="REMOVE"
    btn.addEventListener("click", function(){
        removeTocart(el.id)
    })
    div.append(img,p1,p2,p3,btn)
    document.querySelector(".cart_page").append(div)
  })
  }

  display()

    function removeTocart(){
    basket = basket.filter((ele)=>{
        ele.id !== ele
    }
   
    )

    localStorage.setItem("cart",JSON.stringify(basket))

    display()
    }

  









    
 
// let generate_cart_item =()=>{
 
//    if(basket.length!==0){
//     return (shoppingCart.innerHTML= 
//         basket.map((ele)=>{
//             let{image,name,id,price}=ele;
//             return `
           
           
//            <p> ${id}<p/>
//              <p> ${name}<p/>
              
//              <img width="340px" height="auto"src=${image} alt=""/>
           
         
//              <p>Rs: ${price}<p/>
            
//   <button>n<button/>
           
//             `
            
//         })
        
//         )
//    }
// }
// generate_cart_item()


