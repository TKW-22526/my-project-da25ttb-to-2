/*Mã nguồn Javascript*/
//Khai báo một đối tượng
const product = {
    id:"1",
    name:"Hoa hồng Pháp",
    price:250000,
    description:"Đây là giống Hoa được yêu thích ở Pháp được nhập khẩu  về Việt Nam ...",
    image:"../assets/images/rose.jpg",
    link:"chi-tiet.html"
};

const products = [
    {
        id:"1",
        name:"Hoa hồng Pháp",
        price:150000,
        description:"Đây là giống Hoa được yêu thích ở Pháp được nhập khẩu  về Việt Nam ...",
        image:"../assets/images/rose.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"2",
        name:"Hoa hồng Việt Nam",
        price:650000,
        description:"Đây là giống Hoa được yêu thích ở Pháp được nhập khẩu  về Việt Nam ...",
        image:"../assets/images/rose2.jpg",
        link:"chi-tiet.html"
    },
    {
        id:"3",
        name:"Hoa hướng dương",
        price:250000,
        description:"Đây là giống Hoa được yêu thích ở Pháp được nhập khẩu  về Việt Nam ...",
        image:"../assets/images/sunflower.jpg",
        link:"chi-tiet.html"
    }
];

function inBCC(n)
{
    let result = "";
    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`;
        i++;
    }
    document.getElementById("result").innerHTML = result;
}

function addItem(name, price, description, link, image)
{
    //Tạo khung chứa container-item
    const item = document.createElement("div"); //<div></div>
    
    item.setAttribute("class","container-item");
    
    //Trong 1 item có khung chứa container-image và container-info

    //Tạo khung chứa container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    //Tạo 1 ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image);//truyền tham số image
    imageProduct.setAttribute("alt", name);
    imageProduct.setAttribute("style", "width:100%; max-width:150px;");

    //Chèn đối tượng ảnh vào khung chứa ảnh
    containerImage.appendChild(imageProduct);

    //Tạo khung chứa container-info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    //Tạo 4 đứa con
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);
    
    //Thêm con vào khung chứa info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);
    
    //Đưa khung ảnh vào item
    item.appendChild(containerImage);
    //Đưa khung info vào item
    item.appendChild(containerInfo);
    //Đưa khung chứa container-product-list vào container
    document.getElementById("container-product-list").appendChild(item);
}

function addItemV2(obj)
{
    const list = document.getElementById("product-list");
    list.innerHTML += `
        <div class="col">
                    <div class="card product-item h-100 ">
                        <div class = "product-image ratio ratio-1x1">
                            <img class="card-img-top object-fit-cover" src="${obj.image}" alt="${obj.name}">
                        </div>
                        <div class="card-body bg-light product-info text-center">
                            <h4 class = "card-title text-danger">${obj.name}</h4>
                            <h5 class = "card-text">${obj.price}</h5>
                            <p style = "text-align:justify; line-height:1.5" class = "card-text">${obj.description}</p>
                            <a class = "btn btn-info" href = "${obj.link}?ma=${obj.id}">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
    `;
}

function loadAllProducts(array)
{
    let i = 0;
    while(i<array.length)
    {
        addItemV2(array[i]);
            i++;
    }
}