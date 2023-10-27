// -------------js for navigation menu --------------


const menuItems = document.querySelector("#menuItems");

        menuItems.style.maxHeight = "0px";

        function menutoggle() {
            if(menuItems.style.maxHeight == "0px"){
                menuItems.style.maxHeight = "200px";
            } else {
                menuItems.style.maxHeight = "0px";
            }
        }


// -------------js for product gallery --------------
const productImg = document.querySelector("#product-img");
const smallImg = document.querySelectorAll(".small-img");

for(img of smallImg){
    img.addEventListener("click", changeImg);
}

function changeImg(event){
    let clickImg = event.target;
    productImg.src = clickImg.src;
}


// -------------js for toggle form --------------

const logForm = document.querySelector("#log-form");
const regForm = document.querySelector("#reg-form");
const indicator = document.querySelector("#indicator");
const login = document.querySelector(".login");
const register = document.querySelector(".register");

register.addEventListener("click", () => {
    regForm.style.transform = "translateX(0px)";
    logForm.style.transform = "translateX(-300px)";
    indicator.style.transform = "translateX(100px)";
})

login.addEventListener("click", () => {
    regForm.style.transform = "translateX(300px)";
    logForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(0px)";
})



