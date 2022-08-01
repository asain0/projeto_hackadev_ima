const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const productName = document.getElementsByTagName("h2");

  for(var i=0; i < productName.length; i++){
    let match = product[i].getElementsByTagName('h2')[0];
    if(match){
      let textvalue = match.textContent || match.innerHTML

      if(textvalue.toLocaleUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = ""; 
      }else{
        product[i].style.display = "none";

      } 
      }
    }
  }