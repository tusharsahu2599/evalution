 let cartarr = JSON.parse(localStorage.getItem("cartmeals")) || [];
  console.log(cartarr);
  displaycart(cartarr);

  function displaycart(cartmeals) {
      document.querySelector("#container").innerHTML=""
    cartmeals.forEach(function (cartelem, index) {


      let cartdiv = document.createElement("div");
      cartdiv.setAttribute("class", "cartdiv");

      let img = document.createElement("img");
      img.src = cartelem.img;

      let name = document.createElement("h1");
      name.innerHTML = cartelem.name;

      let price = document.createElement("h2");
      price.innerHTML = cartelem.price;

      let button = document.createElement("button");
      button.addEventListener("click", () => {

        removeitem(index);
      });
      button.innerHTML = "Remove";

      cartdiv.append(img, name, price, button);
      document.querySelector("#container").append(cartdiv);
      
      // console.log(cartmeals[index].price)
    total()
    });
    
    

    function removeitem(index){
      
      cartarr.splice(index,1)

      displaycart(cartarr);
      localStorage.setItem("cartmeals",JSON.stringify(cartarr))
      
    }
    
  }
  function total(){

 let totalcart=cartarr.reduce(function(ac,av){

  return ac+av.price;


 },0)
 
    document.querySelector(".total").innerText=`Cart Total Amount :${totalcart}`;
    
  }