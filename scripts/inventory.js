let items = JSON.parse(localStorage.getItem("product"));
display(items);
function display(res) {
    res.forEach(function (el, i) {
        document.getElementById("products_data").innerHTML="";
        let product_brand = document.createElement("h1");
        product_brand.innerText = el.product_brand;

        let product_name = document.createElement("p");
        product_name.innerText = el.product_name

        let product_price = document.createElement("h4");
        product_price.innerText = el.product_price

        let product_image = document.createElement("img")
        product_image.src = el.product_image

        let button = document.createElement("button");
        button.innerText = "REMOVE"
        button.addEventListener("click", function (event) {
            event.target.parentNode.remove();
            delet(i)
        })

        document.getElementById("products_data").append(product_brand, product_name, product_price, product_image, button)
    })
}
function delet(i) {
    console.log(i);
    items.splice(i, 1)
    localStorage.setItem("product", JSON.stringify(items))
    window.location.reload();
}



// let LH=document.getElementById("LH");
// LH.addEventListener("click",LH)

// function LH(){
//      items.sort(function(a,b){
//         return a.product_price-b.product_price;
//      })
//      display(items);
// }



// let HL=document.getElementById("hl");
// HL.addEventListener("click",HL)

// function HL(){
//     items.sort(function(a,b){
//         return b.product_price-a.product_price;
//      })
//      display(items);
// }




function HL() {
    items.sort(function (a, b) {
        return a.product_price - b.product_price;
    })
    display(items);
}


function LH() {
    items.sort(function (a, b) {
        return b.product_price - a.product_price;
    })
    display(items);
}