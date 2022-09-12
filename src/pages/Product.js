import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Product = async () => {
  const id = getHash();
  const product = getData(id);
  const view = `
        <div class="Products-inner">
            <article class="Product-card">
                <img src="${product.img.hdUrl}" alt="${product.name}">
                <h2>${product.name}</h2>
            </article>
            <article class="Product-card">
                <img src="${product.img.hdUrl}" alt="${product.name}">
                <h2>${product.name}</h2>
            </article>
            
        </div> 
    `;
  return view;
};
export default Product;
