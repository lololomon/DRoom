import DressNav from "../models/dressNav.js";
import DressService from "../services/DressService.js";

let dressService = new DressService();

let dressNav = new DressNav();

const getEle = (id) => document.getElementById(id);

const setLocalStorage = (listProduct) => {
  localStorage.setItem("ListProduct", JSON.stringify(listProduct));
};

const getLocalStorage = () => {
  if (localStorage.getItem("ListProduct")) {
    return JSON.parse(localStorage.getItem("ListProduct"));
  }
};

const renderProduct = () => {
  dressService
    .fetchDressTab()
    .then((result) => {
      // console.log(result.data);
      setLocalStorage(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
renderProduct();

let arrProduct = getLocalStorage();
const Filter = (listProduct, type) => {
  return listProduct.filter((product) => {
    return product.type === type;
  });
};

const filterProduct = (listProduct, type) => {
  let arrFilter = Filter(listProduct, type);
  let content = "";
  getEle("tabProduct").innerHTML = "";
  arrFilter.map((product, index) => {
    content += `
    
      <div class="card col-3 float-left align-items-center">
            <img src="${product.imgSrc_jpg}" style="width: 150px;" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <button href="#" class="btn btn-danger" id="${product.type}_${index}" onclick="checkProduct('${product.id}')">Thử đồ</button>
            </div>
      </div>
      
      
    `;
  });
  getEle("tabProduct").innerHTML = content;
};
// filterProduct();

//
const rederNav = () => {
  dressService
    .fetchDressNav()
    .then((result) => {
      // console.log(result.data);
      dressNav.renderNav(result.data);
      getEle("tabTopClothes").addEventListener("click", () =>
        filterProduct(arrProduct, "topclothes")
      );
      getEle("tabTopClothes").click();
      getEle("tabBotClothes").addEventListener("click", () =>
        filterProduct(arrProduct, "botclothes")
      );
      getEle("tabShoes").addEventListener("click", () =>
        filterProduct(arrProduct, "shoes")
      );
      getEle("tabHandBags").addEventListener("click", () =>
        filterProduct(arrProduct, "handbags")
      );
      getEle("tabNecklaces").addEventListener("click", () =>
        filterProduct(arrProduct, "necklaces")
      );
      getEle("tabHairStyle").addEventListener("click", () =>
        filterProduct(arrProduct, "hairstyle")
      );
      getEle("tabBackground").addEventListener("click", () =>
        filterProduct(arrProduct, "background")
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
rederNav();

const checkProduct = (id) => {
  dressService
    .fetchDressTabID(id)
    .then((result) => {
      let productItem = result.data;
      switch (productItem.type) {
        case "topclothes":
          document.querySelector(
            ".bikinitop"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "botclothes":
          document.querySelector(
            ".bikinibottom"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "shoes":
          document.querySelector(
            ".feet"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "handbags":
          document.querySelector(
            ".handbag"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "necklaces":
          document.querySelector(
            ".necklace"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "hairstyle":
          document.querySelector(
            ".hairstyle"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
        case "background":
          document.querySelector(
            ".background"
          ).style.backgroundImage = `url('${productItem.imgSrc_png}')`;
          break;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

window.checkProduct = checkProduct;
