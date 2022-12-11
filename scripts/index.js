//store the products array in localstorage as "data"


document.querySelector("form").addEventListener("submit",Mycal);
let arr=JSON.parse(localStorage.getItem("product")) ||[] ;
function Mycal(event){
    event.preventDefault();
    let form=document.getElementById("form");
    let obj={
        product_brand:form.product_brand.value,
        product_name:form.product_name.value,
        product_price:form.product_price.value,
        product_image:form.product_image.value,
    }
    arr.push(obj)
    localStorage.setItem("product",JSON.stringify(arr))
}
