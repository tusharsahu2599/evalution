async function getmenu() {
    let menu_div = document.querySelector("menu");
    try {
      let data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
      );
  
      let response = await data.json();
      showmeals(response.meals);
      console.log("response:", response.meals);
    } catch (err) {
      console.log("err:", err);
    }
  }
  getmenu();
  
  function showmeals(mymeal) {
    mymeal.forEach(function (elem, index) {
      let container = document.createElement("div");
  
      let name=document.createElement("h1");
      name.innerHTML=elem.strMeal;
  
      let img = document.createElement("img");
      img.src = elem.strMealThumb;
  
      let price = document.createElement("p");
      let rs = Math.floor(Math.random() * 400 + 100);
      price.innerHTML = rs;
  
      let button = document.createElement("button");
      button.setAttribute("class", "add");
  
      button.addEventListener("click", () => {
        // console.log(123);
  
        addtocart(index, rs);
      });
      button.innerHTML = "Add Cart";
  
      container.append(img,name, price, button);
      document.querySelector(".container").append(container);
  
      total();
      
    });
  
    
    function addtocart(index, rs) {
  
      let cartarr = JSON.parse(localStorage.getItem("cartmeals")) || [];
      // cartarr.push(mymeal[index]);
   
  
     let mealobj={
       img:mymeal[index].strMealThumb,
       name:mymeal[index].strMeal,
       price:rs
     }
     cartarr.push(mealobj)
      
     localStorage.setItem("cartmeals",JSON.stringify(cartarr))
     total()
    }
  
  
  }
  function total(){
  
    let cartarr = JSON.parse(localStorage.getItem("cartmeals")) || [];
  
    document.querySelector(".cart").innerText=`Your Cart Total is: ${cartarr.length}`
  
  }