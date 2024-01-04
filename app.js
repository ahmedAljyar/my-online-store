function addProduct(productDetails, menuID){
    let div = document.createElement("div");
    div.className="product";
    div.innerHTML='<div class="productImg"><a href="'+productDetails.img+'"><img src='+productDetails.img+'></a></div><div class="productBottom"><div class="productDetails"><h1 class="productName" title="'+productDetails.name+'">'+productDetails.name+'</h1><span class="price">'+productDetails.price+'</span></div><button class="buy">أضف إلي السلة</button></div>';
    let menu = document.getElementById(menuID).getElementsByClassName("productsMenu")[0];
    menu.insertBefore(div, menu.getElementsByClassName("space")[0]);
}

function addProductsMenu(ID, name){
    let add = true;
    for(let box of document.getElementsByClassName("productsBox")){
        if(ID==box.id){
            add = false;
        }
    }
    if(add){
        //add in center part
        let div = document.createElement("div");
        div.className = "productsBox";
        div.id = ID;
        div.innerHTML='<h1 class="menuTitle">'+name+'</h1><div class="productsMenu"></div></div>';
        document.getElementsByClassName("productsMainMenu")[0].appendChild(div);
        //add in right part
        let a = document.createElement("a");
        a.href = "#"+ID;
        a.innerText = name;
        document.getElementById("nav").appendChild(a);
    }
}

function addProducts(){
    for (let menu of productsMenus){
        for (let product of menu.products){
            addProduct(product, menu.ID)
        }
    }
}

function addProductsMenus(){
    for(let menu of productsMenus){
        addProductsMenu(menu.ID, menu.name);
    }
}

let mainMenu = document.getElementsByClassName("productsMainMenu")[0];
mainMenu.addEventListener("click", function(e){
    let button = e.target;
    if(button.className === "buy"){
        let productName = button.parentNode.getElementsByClassName("productName")[0].innerText;
        for(let menu of productsMenus){
            for(let product of menu.products){
                if(productName === product.name){
                    let li =  document.createElement("li");
                    li.innerHTML = '<button class="buyRemove">x</button><span class="buyName">'+product.name+'</span><span class="buyPrice">'+product.price+'</span>';
                    document.getElementById("buys").appendChild(li);
                }
            }
        }
    }
});

let removeBtn = document.getElementById("buys");
removeBtn.addEventListener("click", function(e){
    let button = e.target;
    if(button.className === "buyRemove"){
        button.parentNode.remove();
    }
})

let productsMenus = [



    /*
    {
        ID : ""
        , name : ""
        , products : [
        ]
    }


    {
        name : ""
        , img : "images/"
        , price : ""
    }
    */



    {
        ID : "candies"
        , name : "حلويات"
        , products : [


            {
                name : "ايس كريم"
                , img : "images/1.jpg"
                , price : "10 EP"
            }


        ]
    }



    , {
        ID : "milkProducts"
        , name : "ألبان"
        , products : [


            {
                name : "لبن"
                , img : "images/2.jpg"
                , price : "26 EP"
            }


        ]
    }



    , {
        ID : "pieses"
        , name : "فطائر"
        , products : [


            {
                name : "فطير مشلتت"
                , img : "images/3.jpg"
                , price : "5 EP"
            }
        

        ]
    }



    , {
        ID : "jams"
        , name : "مربات"
        , products : [


            {
                name : "مربى الفراولة"
                , img : "images/4.jpg"
                , price : "20 EP"
            }


            
            , {
                name : "مربى التين"
                , img : "images/5.jpg"
                , price : "15 EP"
            }


        ]
    }



    , {
        ID : "cakes"
        , name : "كيكات"
        , products : [


            {
            name : "كيكة الشيكولاتة"
            , img : "images/6.jpg"
            , price : "50 EP"
            }


        ]
    }



    , {
        ID : "eastyCandies"
        , name : "حلويات شرقية"
        , products : [
        ]
    }
]

addProductsMenus();
addProducts();